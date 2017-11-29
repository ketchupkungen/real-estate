import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'filterBy'})
export class FilterByPipe implements PipeTransform {
	transform(items: any, filter: any): any {
		if (!items || !filter) {		
			return items;
		}

		return items.filter((item: any) => 
			item.place.municipality === filter.place.municipality &&
			item._id !== filter._id
		);
	}
}