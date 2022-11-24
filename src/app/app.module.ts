import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SingupComponent } from './singup/singup.component';
import { ExploreFoodComponent } from './explore-food/explore-food.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SignInComponent,
    SingupComponent,
    ExploreFoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
