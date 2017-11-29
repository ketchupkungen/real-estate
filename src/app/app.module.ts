import { NgModule }                        from '@angular/core';
import { NgbModule } 		                   from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule }                   from '@angular/platform-browser';
import { RouterModule }                    from '@angular/router';
import { HttpModule }                      from '@angular/http';

import { SalesObjectService }              from './sales-object.service';
import { MemService }                      from './mem.service';
import { RestService }                     from './rest.service';
import { SearchService }                   from './search-service';

import { OrderByPipe }                     from './order-by.pipe';
import { FilterByPipe }                    from './filter-by.pipe';

import { AppComponent }                    from './app.component';
import { HeaderComponent }                 from './header.component';
import { FooterComponent }                 from './footer.component';
import { ContactFormContactViewComponent } from './contactform-contactview.component';
// Menu for a specific salesObject
import { SalesObjectHeaderComponent }      from './sales-object-header.component';
// Images for a specific salesObject

import { SalesObjectImagesComponent }      from './sales-object-images.component';
import { SearchComponent }                 from './search.component';
import { SalesObjectSmallComponent }       from './sales-object-small.component';
import { ReturnToTop }                     from './return-to-top';
import { SalesObjectLayoutComponent }      from './sales-object-layout.component';
import { SalesObjectInformationComponent } from './sales-object-information.component';
import { SellWithUsComponent }             from './sell-with-us.component';
import { SearchPageComponent}              from './search-page.component';
import { ContactPageComponent}             from './contact-page.component';
import { ObjectDetailComponent }           from './object-detail.component';
import { SalesObjectRecommendedComponent } from './sales-object-recommended.component';
import { BrokersComponent }                from './brokers.component';
import { CompanyCardComponent }            from './contact-company.component';
import { SalesObjectSummaryComponent }     from './sales-object-summary.component';
import { SalesObjectContactComponent }     from './sales-object-contact.component';
import { AboutUsComponent }                from './about-us.component';
import { JobbsComponent }                  from './jobbs.component';

@NgModule({
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'search-page',
        pathMatch: 'full'
      },
      {
        path: 'sell-page',
        component: SellWithUsComponent
      },
      {
        path: 'search-page',
        component: SearchPageComponent
      },
      {
        path: 'contact-page',
        component: ContactPageComponent
      },
      {
        path: 'about-us',
        component: AboutUsComponent
      },
      {
        path: 'jobbs',
        component: JobbsComponent
      },
      {
        path: 'detail/:id',
        component: ObjectDetailComponent
      }
    ]),
    HttpModule
  ],
  declarations: [
    OrderByPipe,
    FilterByPipe,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactFormContactViewComponent,
    SalesObjectHeaderComponent,
    SalesObjectImagesComponent,
    SearchComponent,
    SalesObjectSmallComponent,
    ReturnToTop,
    SalesObjectLayoutComponent,
    SalesObjectInformationComponent,
    SellWithUsComponent,
    BrokersComponent,
    CompanyCardComponent,
    SearchPageComponent,
    ContactPageComponent,
    ObjectDetailComponent,
    BrokersComponent,
    SalesObjectSummaryComponent,
    SalesObjectRecommendedComponent,
    SalesObjectContactComponent,
    AboutUsComponent,
    JobbsComponent
  ],
  providers: [ SalesObjectService,
               MemService,
               RestService,
               SearchService ], 
  bootstrap: [ AppComponent ]
})
export class AppModule { }
