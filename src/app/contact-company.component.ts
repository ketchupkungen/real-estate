import { Component, OnInit } 			from '@angular/core';

import { RestService }					from './rest.service';
import { UsObject } 					  from '../class/us-object.class';

@Component({
  selector: 'company-card',
  templateUrl: 'templates/company-card.html',
  styleUrls: ['css/company-card.component.css']
})

export class CompanyCardComponent implements OnInit {

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

  convertNumberToPostcode(postNumber:number){

    if(postNumber){
      let postNumberStr = postNumber.toString();
      if (postNumberStr.length == 5){
        let first = postNumberStr.slice(0, 3);
        let second = postNumberStr.slice(3, 5);
        return first + " " + second;
      }
    }

    return "xxx xx";
  }

}
