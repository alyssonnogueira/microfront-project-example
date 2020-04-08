import { ContaComponent } from './component/conta/conta.component';
import { APP_BASE_HREF } from '@angular/common';
import { EmptyRouteComponent } from './component/empty-route/empty-route.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ContaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, enableTracing: false })],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/contas' }]
})
export class AppRoutingModule { }
