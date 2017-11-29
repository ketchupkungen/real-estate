import { Component, OnInit } 			from '@angular/core';

import { RestService }					from './rest.service';
import { UsObject } 					  from '../class/us-object.class';

@Component({
	selector: 'about-us',
	templateUrl: 'templates/about-us.html',
	styleUrls: [ 'css/about-us.css' ]
})

export class AboutUsComponent implements OnInit {
	usObject: UsObject;

  constructor(
    private restService: RestService
  ) {}

  ngOnInit(): void {
    let Us = this.restService.newRestEntity("us");

    Us.find('').then((data:any)=>{
      this.usObject = data[0];
    });
  }
}