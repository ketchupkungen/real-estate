import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { RestService }        from './rest.service';

import { SalesObject } 	      from '../class/sales-object.class';

@Component({
	selector: 'information',
	templateUrl: 'templates/sales-object-information.html',
	styleUrls: [ 'css/sales-object-information.css' ]
})

export class SalesObjectInformationComponent implements OnInit {

	salesObject: SalesObject;

  constructor(
    private route: ActivatedRoute,
    private restService: RestService,
    private location: Location
	) {}

	ngOnInit(): void {
    let Sales = this.restService.newRestEntity("sale");

    this.route.params
      .switchMap((params: Params) => Sales.find(params['id']))
      .subscribe((data: any) => {
        this.salesObject = data;
      });
	}

  numberWithSpaces(price:number) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  convertNumberToPostcode(postNumber:number){
    let postNumberStr = postNumber.toString();
    if (postNumberStr.length == 5){
      let first = postNumberStr.slice(0, 3);
      let second = postNumberStr.slice(3, 5);
      return first + " " + second;
    }
    return "xxx xx";
  }

  getDate(time:Date){
    let d = new Date(time);

    let monthStr:String;
    let dateStr:String;

    if(d.getMonth().toString().length == 1){monthStr = "0" + d.getMonth()}else{monthStr = "" + d.getMonth()}
    if(d.getDate().toString().length == 1){dateStr = "0" + d.getDate()}else{dateStr = "" + d.getDate()}

    return d.getFullYear() + "-" + monthStr + "-" + dateStr;
  }

}
