import { Observable } from "rxjs/Observable";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

export class RestEntity {

  baseUrl: string;
  http: any; // injected by the service

  constructor(entityName: string){

    // Real backend/REST api
    this.baseUrl = '/rest/' + entityName + '/';
  }

  httpRequest(type:string, idOrQuery:string, requestBody:any){
    // Freddy: Had to remove + '/' + between baseUrl and idOrQuery
    let url:string = this.baseUrl + idOrQuery;
    // remove trailing slahses
    while(url.substr(-1) == '/'){url = url.substring(0,url.length-1);}
    // make request
    return this.http[type](url,requestBody)
      // ...and calling .json() on the response to return data
      .map((res:any) => {
        return res.json()
      })
      //...errors if any
      .catch((error:any) => {
        return Observable.throw('Server error')
      });
  }

  promiseMaker(type:string, idOrQuery:string, requestBody:any = undefined){

    return new Promise((resolve,reject):void =>{
      this.httpRequest(type,idOrQuery,requestBody).subscribe(
        (data:any)=>{resolve(data);},
        (error:any)=>{reject(error);}
      );
    });

  }


  create(requestBody: Object):any {
    return this.promiseMaker('post','',requestBody);
  }

  find(idOrQuery: string):any {
    return this.promiseMaker('get',idOrQuery);
  }

  update(idOrQuery: string,requestBody: Object): any {
    return this.promiseMaker('put',idOrQuery,requestBody);
  }

  delete(idOrQuery: string): any {
    return this.promiseMaker('delete',idOrQuery);
  }

}