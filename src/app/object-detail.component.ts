import { Component, OnInit } 			from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } 							from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { RestService }					from './rest.service';
import { SalesObjectService } 	from './sales-object.service';
import { SalesObject } 					from '../class/sales-object.class';

@Component({
  selector: 'object-detail-component',
  templateUrl: 'templates/object-detail.component.html',
  styleUrls: ['css/object-detail.component.css']
})
export class ObjectDetailComponent implements OnInit {
	salesObject: SalesObject;

	constructor(
		private salesObjectService: SalesObjectService,
		private route: ActivatedRoute,
		private restService: RestService,
		private location: Location
	){}

	ngOnInit(): void {
		let Sales = this.restService.newRestEntity("sale");

	  this.route.params
	    .switchMap((params: Params) => Sales.find(params['id']))
	    .subscribe((data: any) => {
      	this.salesObject = data;
      });
	}

	getSalesObjectImg(salesObject: SalesObject, indexNo: number):string {
		return this.salesObjectService.getSalesObjectImg(salesObject, indexNo);
	}

}
