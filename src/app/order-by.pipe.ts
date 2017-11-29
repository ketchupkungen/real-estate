import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'orderBy'})
export class OrderByPipe implements PipeTransform {
  transform(value: Object[], args: string[]): any {

  	if(!value){return value;}

  	return value.slice().sort((a,b)=>{

  		// Loop throught args
  		// Things to sort after
  		for(let arg of args){

  			// Find out if descending
  			let descending = false;
  			if(arg[0] == '-'){
  				descending = true;
  				arg = arg.substr(1);
  			}

  			// If a diff between values, return sort order
  			// Otherwise continue to next arg
  			if(a[arg] > b[arg]){
  				return descending ? -1 : 1;
  			}
  			else if(a[arg] < b[arg]){
				return descending ? 1 : -1;
  			}
  		}
  	});

  }
}