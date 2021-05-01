import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
// import { SignInComponent } from '../sign-in/sign-in.component';

import { SignUpRoutingModule } from './sign-up-routing.module';
import { SignUpComponent } from './sign-up.component';


@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    CommonModule,
    SignUpRoutingModule,
    FormsModule
  ]
})
export class SignUpModule { }
