import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { XssScriptsListComponent } from './components/xss-scripts-list/xss-scripts-list.component';
import { XssListService } from './services/xss-list.services';

@NgModule({
  declarations: [
    XssScriptsListComponent
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    XssScriptsListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CurrencyPipe, XssListService]
})
export class SharesModule { }
