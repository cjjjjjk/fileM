import { NgModule } from '@angular/core'
import { CommonModule, CurrencyPipe } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [CurrencyPipe]
})
export class SharesModule { }
