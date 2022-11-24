import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SingupComponent } from './singup/singup.component';
import { ExploreFoodComponent } from './explore-food/explore-food.component';
import { AccountComponent } from './account/account.component';
import { RouterModule, Routes } from '@angular/router';

const myRoute :Routes=[
{path:"",component:ExploreFoodComponent},
{path:"explore",component:ExploreFoodComponent},
{path:"account",component:AccountComponent},
{path:"signin",component:SignInComponent},
{path:"singup",component:SingupComponent},


]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SignInComponent,
    SingupComponent,
    ExploreFoodComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
