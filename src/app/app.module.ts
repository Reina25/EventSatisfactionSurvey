import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingcomponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
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
  // providers: [{
  //   provide: APP_INITIALIZER,
  //   useFactory: () => initializeApp,
  //   multi: true
  //  }],
  bootstrap: [AppComponent]
})
export class AppModule { }


// export function initializeApp(http: HttpClient) {
//   return (): Promise<any> =>
//     firstValueFrom(
//       http
//         .get("https://someUrl.com/api/user")
//         .pipe(tap(user => { ... }))
//     );
// }
