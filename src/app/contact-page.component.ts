import { Component } from '@angular/core';

@Component({
  selector: 'contact-page',
  styleUrls: ['css/contact-page.component.css'],
  template: `
  	<company-card></company-card>
  	<contactform-contactview class="contact"></contactform-contactview>
  	<brokers></brokers>
  `,
})

export class ContactPageComponent {

}
