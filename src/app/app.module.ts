import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

//Config local app
import { registerLocaleData } from '@angular/common';
import localEsp from '@angular/common/locales/es';
import localFr from '@angular/common/locales/fr';

registerLocaleData(localEsp);
registerLocaleData(localFr);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    SharedModule,
  ],
  providers: [
    // {
    //   provide: LOCALE_ID,
    //   useValue: 'es',
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
