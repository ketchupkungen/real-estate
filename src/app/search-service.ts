import { Injectable }   from '@angular/core';
import { Http }         from '@angular/http';

import { RestService }	from './rest.service';
import { MemService }   from './mem.service';

import { SalesObject }  from '../class/sales-object.class';

@Injectable()
export class SearchService {

  salesObject: SalesObject;
  data: any;
  globalMem: any;

	constructor(
    private http: Http,
    private restService: RestService,
    private memService: MemService
  ){ }

  getSearchResult(): any {
    this.globalMem = this.memService.global();
    this.globalMem.filtersActive = this.globalMem.filtersActive || [];
    let Sales = this.restService.newRestEntity('sale');
    let activeLength = this.globalMem.filtersActive.length;

    return new Promise((resolve, reject)=>{
      let query = '';

      if(this.globalMem.searchValues) {
        let valueWithRegexp = '/'+ this.globalMem.searchValues +'/i';

        query = `{ $or: [
          { "place.city": `+valueWithRegexp+` },
          { "place.municipality": `+valueWithRegexp+` },
          { "type": `+valueWithRegexp+` }
        ]}`
      }

      if(activeLength > 1) {
        let filterQuery = '{ $and: [ ';

        this.globalMem.filtersActive.forEach((filterIndex: any, index: number) => {
          let value = this.globalMem.filters[filterIndex].selectedValue;

          if(index !== activeLength - 1) {
            filterQuery = filterQuery + value + ',';
          } else {
            if(query !== '') {
              query = filterQuery + value + ',' + query + '] }';
            } else {
              query = filterQuery + value + '] }';
            }
          }
        });

      } else if(activeLength === 1) {
        let index = this.globalMem.filtersActive[0];
        let value = this.globalMem.filters[index].selectedValue;

        if(query !== '') {
          query = '{ $and: [ ' + value + ',' + query + '] }';
        } else {
          query = '{ $and: [ ' + value + '] }';
        }
      }
      Sales.find('find/' + query).then((data: any) => {
        resolve(data);
      });
    });
	}
}
