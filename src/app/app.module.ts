import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingcomponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EventServiceService } from './service/event-service.service';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    routingcomponents

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  // providers: [
  //   {
  //     provide: APP_INITIALIZER,
  //     useFactory: initializeApp,
  //     deps: [EventServiceService],
  //   },
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// export function initializeApp(eventService: EventServiceService): Promise<any> {
//   return new Promise((resolve, reject) => {
//     eventService.setEventID(this.route.snapshot.queryParamMap.get("eventID"))
//     eventService.fetchEventData()
    
    
//      })
//   }
