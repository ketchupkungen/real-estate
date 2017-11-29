import { Component, OnInit }       from '@angular/core';

import { RestService }             from './rest.service';
import { BrokersObject }           from '../class/broker-object.class';

@Component({
  selector: 'brokers',
  templateUrl: 'templates/view-all-brokers.html',
  styleUrls: ['css/brokers.component.css']
})

export class BrokersComponent implements OnInit {

  brokersObject:BrokersObject;

  constructor(
    private restService: RestService
  ) {}

  ngOnInit(): void {
    let Brokers = this.restService.newRestEntity("broker");

    Brokers.find('').then((data:any)=>{
      this.brokersObject = data;
    });
  }

  numberWithSpaces(price:number) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

}
