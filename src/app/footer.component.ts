import { Component} from '@angular/core';

@Component({
	selector: 'footer',
	templateUrl: 'templates/footer.html',
	styleUrls: [ 'css/footer.component.css' ]
})

export class FooterComponent {

	tags = [

		{
			name: 'Kontakt',
			link: 'contact-page'
		},
		{
			name: 'Om oss',
			link: 'about-us'
		},
		{
			name: 'Jobb',
			link: 'jobbs'
		}


	];

}