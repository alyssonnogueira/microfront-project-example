import { TransacaoComponent } from './components/transacao/transacao.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { EmptyRouteComponent } from './components/empty-route/empty-route.component';


const routes: Routes = [
  { path: '', component: TransacaoComponent },
  { path: 'transacoes', component: TransacaoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, enableTracing: false })],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/transacoes' }]
})
export class AppRoutingModule { }
