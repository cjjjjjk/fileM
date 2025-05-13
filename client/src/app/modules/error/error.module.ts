import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorRoutingModule } from './error-routing.module';
import { Er404Component } from './components/er404/er404.component';
import { Er403Component } from './components/er403/er403.component';


@NgModule({
  declarations: [
    Er404Component,
    Er403Component
  ],
  imports: [
    CommonModule,
    ErrorRoutingModule
  ]
})
export class ErrorModule { }
