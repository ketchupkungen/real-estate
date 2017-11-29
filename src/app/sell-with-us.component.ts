import { Component } from '@angular/core';

@Component({
  selector: 'sell-with-us',
  templateUrl: 'templates/sell-with-us-component.html',
  styleUrls: ['css/sell-with-us.css']
})
export class SellWithUsComponent  { 
	types = [
		'Alla bostadstyper',
		'Bostadsrätt',
		'Villa',
		'Fritidshus'
	];
}