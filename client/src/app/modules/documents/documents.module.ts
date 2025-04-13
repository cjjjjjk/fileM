import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentsRoutingModule } from './documents-routing.module';
import { DocumentListComponent } from './document-list/document-list.component';
import { DocumentItemComponent } from './components/document-item/document-item.component';
import { FormsModule } from '@angular/forms';
import { SharesModule } from '../shares/share.module';

@NgModule({
  declarations: [
    DocumentListComponent,
    DocumentItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DocumentsRoutingModule,
    SharesModule
  ]
})
export class DocumentsModule { }
