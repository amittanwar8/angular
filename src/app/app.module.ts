import { BrowserModule } from '@angular/platform-browser';
import { DomSanitizer } from "@angular/platform-browser";

import { NgModule, ApplicationRef } from '@angular/core';
import { routes } from './app.router';
import { Routes, RouterModule } from '@angular/router';

import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeController } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ROUTES } from '@angular/router';
import { FormsModule, FormGroup } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticationService } from './_services/authenticate.service'
import { LoginComponent } from './login/login.component'
import { AuthCheck } from './_guards/auth.guard'
import { UserService } from './_services/user.service'
import { NewUserService } from './_services/Newuser.service'
import { LinkComponent} from './link/link.component'

@NgModule({

  imports: [BrowserModule, routes, FormsModule, HttpClientModule,HttpModule],


  declarations: [AppComponent,
    HomeController,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LinkComponent
  ],
  providers: [
    AuthenticationService,
    AuthCheck,
    UserService,
    NewUserService

  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
