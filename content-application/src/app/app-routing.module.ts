import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EmptyRouteComponent } from './empty-route/empty-route.component';


const routes: Routes = [
  { path: '', component: EmptyRouteComponent },
  { path: 'transacoes', component: EmptyRouteComponent },
  { path: 'contas', component: EmptyRouteComponent },
  { path: 'responsaveis', component: EmptyRouteComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      routes,
      { useHash: true, enableTracing: false }
    ),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
