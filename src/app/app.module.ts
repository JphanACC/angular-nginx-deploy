import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main/main-page/main-page.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoggingInterceptorService } from './services/interceptors/logging-interceptor.service';

@NgModule({
  declarations: [AppComponent, MainPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    CardModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggingInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
