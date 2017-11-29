import { Injectable } from '@angular/core';
import { Http } 			from '@angular/http';
import { RestEntity } from '../class/rest/rest-entity.class.js';

import { SalesObject } from '../class/sales-object.class';

@Injectable()
export class RestService {

  constructor(private http: Http) { 
  }

  newRestEntity(entityName:string){
    let restEntity = new RestEntity(entityName);
    restEntity.http = this.http;
    return restEntity;
  }

}