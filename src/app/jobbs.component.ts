import { Component, OnInit } 			from '@angular/core';

import { RestService }					from './rest.service';
import { UsObject } 					  from '../class/us-object.class';

@Component({
	selector: 'jobbs',
	templateUrl: 'templates/jobbs.html',
	styleUrls: [ 'css/jobbs.css' ]
})

export class JobbsComponent implements OnInit {
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
