import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'documents', loadChildren: () => import('./modules/documents/documents.module').then(m => m.DocumentsModule) },
  { path: 'document/:id', loadChildren: () => import('./modules/document/document.module').then(m => m.DocumentModule) },
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: "**",
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
