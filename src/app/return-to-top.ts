import { Component, HostListener } from '@angular/core';

@Component({
	selector: 'return-to-top',
	templateUrl: 'templates/return-to-top.html',
	styleUrls: [ 'css/return-to-top.css' ]
})

export class ReturnToTop {

  showToTopButton = false;

  @HostListener('window:scroll', ['$event'])
  doSomething(event: any) {
    if(window.pageYOffset > 100) {
      this.showToTopButton = true;
    } else {
      this.showToTopButton = false;
    }
  }

  scrollToTop(){
    function scroller(){
      window.scrollBy(0,-100);
      if(window.pageYOffset > 0){
        setTimeout(scroller,10);
      }
    }
    scroller();
  }
}
