import { Injectable } from '@angular/core';
import { Conta } from '../model/conta';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  private key = 'contas';
  private contas: Conta[];

  constructor() {
    this.contas = JSON.parse(localStorage.getItem(this.key));
  }

  obterContaPorId(id: number): Conta {
    return this.contas.filter(conta => conta.id === id)[0];
  }

  obterTodasContas(): Conta[] {
    return this.contas;
  }

  obterContaPorIdResponsavel(idResponsavel: number): Conta[] {
    return this.contas.filter(conta => conta.responsavel.id === idResponsavel);
  }
}
