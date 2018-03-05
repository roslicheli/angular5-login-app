/* angular defined */
import { NgModule }					from '@angular/core';
import { BrowserModule }			from '@angular/platform-browser';
import { FormsModule }				from '@angular/forms';
import { HttpModule }				from '@angular/http';

/* user defined, in user main folder app */
import { AppComponent }				from './app.component';
import { Routing }					from './app.routing';

/* user defined, components */
import { AuthGuard }				from './guards/auth.guard';
import { HomeComponent }			from './home/home.component';
import { LoginComponent }			from './login/login.component';

/* user defined, providers*/
import { AuthenticationService }	from './services/authentication.service';
import { UserService }				from './services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing
  ],
  providers: [
  	AuthenticationService,
  	UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
