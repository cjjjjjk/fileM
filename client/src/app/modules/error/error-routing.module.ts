import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Er404Component } from './components/er404/er404.component';
import { Er403Component } from './components/er403/er403.component';

const routes: Routes = [
  {
    path: '404',
    component: Er404Component
  },
  {
    path: "403",
    component: Er403Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorRoutingModule { }
