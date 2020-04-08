import { ResponsavelComponent } from './component/responsavel/responsavel.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

const routes: Routes = [
  { path: '', component: ResponsavelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, enableTracing: false })],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/responsaveis' }]
})
export class AppRoutingModule { }
