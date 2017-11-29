import { Component } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: 'templates/header-component.html',
  styleUrls: ['css/header.css']
})
export class HeaderComponent {
	isNavbarCollapsed = true;

	menuLinks = [
		{
			name: 'Sök bostad',
			path: 'search-page'
		},
		{
			name: 'Sälja',
			path: 'sell-page'
		},
		{
			name: 'Kontakt',
			path: 'contact-page'
		}
	];
}