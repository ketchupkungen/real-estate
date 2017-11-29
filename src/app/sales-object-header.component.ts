import { Component }       from '@angular/core';
import { NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'sales-object-header',
  templateUrl: 'templates/sales-object-header.html',
  styleUrls: ['css/sales-object-header.css'],
  providers: [NgbTabsetConfig] // add NgbTabsetConfig to the component providers
})
export class SalesObjectHeaderComponent {

    constructor(config: NgbTabsetConfig) {
      // customize default values of tabsets used by this component tree
      config.justify = 'center';
      config.type = 'pills';
    }
}
