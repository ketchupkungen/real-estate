import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { RestService }           from './rest.service';

import { SalesObject }           from '../class/sales-object.class';

@Component({
  selector: 'sales-object-images',
  templateUrl: 'templates/sales-object-images.html',
  styleUrls: ['css/sales-object-images.css']
})

export class SalesObjectImagesComponent implements OnInit {
  salesObject: SalesObject;
  
  constructor(
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
}
