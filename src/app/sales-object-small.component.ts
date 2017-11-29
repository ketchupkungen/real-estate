import { Component, OnInit }			from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { SalesObjectService }	from './sales-object.service';
import { MemService }					from './mem.service';
import { RestService }				from './rest.service';
import { SearchService }      from './search-service';

import { SalesObject } 				from '../class/sales-object.class';

@Component({
  selector: 'sales-object-small',
  templateUrl: 'templates/sales-object-small.html',
  styleUrls: ['css/sales-object-small.css']
})

export class SalesObjectSmallComponent implements OnInit {
	localMem: any;
	globalMem: any;
	salesObjects: SalesObject[];
	sortingTypes = [
		{
			name: 'Datum tillagt',
			value: 'dateAdded'
		},
		{
			name: 'Pris',
			value: 'price'
		},
		{
			name: 'Boyta',
			value: 'area'
		},
		{
			name: 'Byggnadsår',
			value: 'buildDate'
		}
	];

	constructor(
		private salesObjectService: SalesObjectService,
		private memService: MemService,
		private restService: RestService,
    private searchService: SearchService
	) { 
		this.localMem = memService.get(this);
 	  this.globalMem = this.memService.global();
	}

	ngOnInit(): void {
		this.localMem.sortingTypes = this.sortingTypes;
		this.localMem.selectedType = this.localMem.selectedType || this.sortingTypes[0];
		this.localMem.selectedOption = this.localMem.selectedOption || ['-dateAdded'];
		this.localMem.selectedSortUp = this.localMem.selectedSortUp || true;

		this.salesObjects = this.salesObjects || [];

    this.getSalesObjectsFromService();
    
    this.globalMem.salesObjectSmallUpdate = ()=>{
    	this.getSalesObjectsFromService();
    }
	}

	getSalesObjectsFromService() {
		this.globalMem.filtersActive = this.globalMem.filtersActive || [];
		if(this.globalMem.searchValues || this.globalMem.filtersActive.length > 0) {
	    this.searchService.getSearchResult().then((data: any) => {
	    	this.salesObjects = data;
	    });
	  } else {
	  	this.salesObjectService.getSalesObjects().then((data: any) => { 
	    	this.salesObjects = data;
	    });
	  }
	}

	getSalesObjectImg(salesObject: SalesObject, indexNo: number):string {
		return this.salesObjectService.getSalesObjectImg(salesObject, indexNo);
	}

	toggleOption(type: any) {
		if(type.name === this.localMem.selectedType.name){
			if(this.localMem.selectedOption[0].charAt(0) === '-'){
				this.localMem.selectedOption = [type.value];
				this.localMem.selectedSortUp = false;
			}
			else{
				this.localMem.selectedOption = ['-' + type.value];	
				this.localMem.selectedSortUp = true;
			}
		}
		else{
			this.localMem.selectedType = type;
			this.localMem.selectedOption = [type.value];
			this.localMem.selectedSortUp = false;
		}
	}

	numberWithSpaces(price:number) {
	  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
	}
}
