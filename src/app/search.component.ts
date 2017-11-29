import { Component, OnInit } from '@angular/core';
import { MemService } from './mem.service';

@Component({
  selector: 'search',
  templateUrl: 'templates/search-component.html',
  styleUrls: ['css/search-component.css']
})

export class SearchComponent implements OnInit{
	localMem: any;
	globalMem: any;
	placeHolder: string;
 	filters = [
		{
			type: 'Rum (min)',
			options: [
				{
					name: '1 rum',
					value: '{ "rooms": { $gte: 1 } }'
				},
				{
					name: '2 rum',
					value: '{ "rooms": { $gte: 2 } }'
				},
				{
					name: '3 rum',
					value: '{ "rooms": { $gte: 3 } }'
				},
				{
					name: '4 rum',
					value: '{ "rooms": { $gte: 4 } }'
				},
				{
					name: '5 rum',
					value: '{ "rooms": { $gte: 5 } }'
				},
				{
					name: '6 rum',
					value: '{ "rooms": { $gte: 6 } }'
				},
				{
					name: '7 rum',
					value: '{ "rooms": { $gte: 7 } }'
				},
				{
					name: 'visa alla',
					value: ''
				}
			],
			selectedName: ''
		},
		{
			type: 'Boarea (min)',
			options: [
				{
					name: '25 m²',
					value: '{ "area": { $gte: 25 } }'
				},
				{
					name: '50 m²',
					value: '{ "area": { $gte: 50 } }'
				},
				{
					name: '75 m²',
					value: '{ "area": { $gte: 75 } }'
				},
				{
					name: '100 m²',
					value: '{ "area": { $gte: 100 } }'
				},
				{
					name: '150 m²',
					value: '{ "area": { $gte: 150 } }'
				},
				{
					name: '200 m²',
					value: '{ "area": { $gte: 200 } }'
				},
				{
					name: '250 m²',
					value: '{ "area": { $gte: 250 } }'
				},
				{
					name: '300 m²',
					value: '{ "area": { $gte: 300 } }'
				},
				{
					name: 'visa alla',
					value: ''
				}
			],
			selectedName: ''
		},
		{
			type: 'Bostadstyp',
			options: [
				{
					name: 'Bostadsrätt',
					value: '{ "type": /Bostadsrätt/i }'
				},
				{
					name: 'Villa',
					value: '{ "type": "Villa" }'
				},
				{
					name: 'Fritidshus',
					value: '{ "type": "Fritidshus" }'
				},
				{
					name: 'visa alla',
					value: ''
				}
			],
			selectedName: ''
		},{
			type: 'Pris (max)',
			options: [
				{
					name: '500 000 kr',
					value: '{ "price": { $lte: 500000 } }'
				},
				{
					name: '750 000 kr',
					value: '{ "price": { $lte: 750000 } }'
				},
				{
					name: '1 000 000 kr',
					value: '{ "price": { $lte: 1000000 } }'
				},
				{
					name: '2 000 000 kr',
					value: '{ "price": { $lte: 2000000 } }'
				},
				{
					name: '3 000 000 kr',
					value: '{ "price": { $lte: 3000000 } }'
				},												
				{
					name: '4 000 000 kr',
					value: '{ "price": { $lte: 4000000 } }'
				},
				{
					name: '5 000 000 kr',
					value: '{ "price": { $lte: 5000000 } }'
				},
				{
					name: '7 000 000 kr',
					value: '{ "price": { $lte: 7000000 } }'
				},
				{
					name: '10 000 000 kr',
					value: '{ "price": { $lte: 10000000 } }'
				},
				{
					name: '15 000 000 kr',
					value: '{ "price": { $lte: 15000000 } }'
				},
				{
					name: '30 000 000 kr',
					value: '{ "price": { $lte: 30000000 } }'
				},
				{
					name: 'visa alla',
					value: ''
				}
			],
			selectedName: ''
		}
	];

	constructor(
			private memService: MemService
		){
		this.localMem = memService.get(this);
	}

	ngOnInit(){
		this.globalMem = this.memService.global()

		if(!this.localMem.filters){
			this.localMem.filters = this.filters;
		}

		if(!this.globalMem.searchValues || this.globalMem.searchValues === '') {
			this.placeHolder = 'Sök efter stad, bostadstyp eller ort';
		} else {
			this.placeHolder = this.globalMem.searchValues;
		}

	}

	onKey(event: any){
		this.saveSearchValues(event.target.value);
	  this.globalMem.salesObjectSmallUpdate();
	}

	saveSearchValues(value: any){
		if(!value || value === '') {
			this.globalMem.searchValues = '';
			this.placeHolder = 'Sök efter stad, bostadstyp eller ort';
		} else {
			this.globalMem.searchValues = value;
		};
	}

	chooseFilter(filter: any, option: any){
		let filterIndex = this.localMem.filters.indexOf(filter);
		this.globalMem = this.memService.global();
		this.globalMem.filtersActive = this.globalMem.filtersActive || [];
		let filterActiveIndex = this.globalMem.filtersActive.indexOf(filterIndex);

		if(option.name === 'visa alla'){
			this.localMem.filters[filterIndex].selectedName = '';
			this.localMem.filters[filterIndex].selectedValue = '';

			if(filterActiveIndex >= 0) {
				this.globalMem.filtersActive.splice(filterActiveIndex, 1 );
			}
		}
		else{
			this.localMem.filters[filterIndex].selectedName = option.name; 
			this.localMem.filters[filterIndex].selectedValue = option.value;

			if(filterActiveIndex < 0) {
				this.globalMem.filtersActive.push(filterIndex);
			}
		}

		this.globalMem.filters = this.localMem.filters;
		this.globalMem.salesObjectSmallUpdate();
	}
}
