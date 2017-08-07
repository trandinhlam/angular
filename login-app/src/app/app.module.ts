import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing }        from './app.routing';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { AuthGuard } from './_guards/index';
import { AlertComponent } from './_directives/index';
import { AlertService, UserService, AuthenticationService } from './_services/index';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlertComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
  	AuthGuard,
  	AlertService,
  	UserService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
