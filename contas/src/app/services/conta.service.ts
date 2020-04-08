import { Transferencia } from './../model/transferencia';
import { Receita } from './../model/receita';
import { Despesa } from './../model/despesa';
import { ResponsavelService } from './responsavel.service';
import { Injectable } from '@angular/core';
import { Conta } from '../model/conta';
import { TipoContaEnum } from '../model/tipoConta.enum';
import { Transacao } from '../model/transacao';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  private contas: Conta[];
  private key = 'contas';

  constructor(private responsavelService: ResponsavelService) {
    this.mockData();
    document.addEventListener(
      'contas:alterarSaldo',
      this.alterarSaldoEvent.bind(this)
    );
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

  salvarConta(conta: Conta): void {
    conta.id = this.contas.length + 1;
    this.contas.push(conta);
    localStorage.setItem(this.key, JSON.stringify(this.contas));
  }

  alterarSaldoEvent(event?: CustomEvent) {
    if (!!event && !!event.detail) {
      this.alterarSaldoConta(event.detail);
    }
  }

  alterarSaldoConta(transacao: Transacao) {
    const conta = this.obterContaPorId(transacao.conta.id);
    if (Despesa.isDespesa(transacao)) {
      conta.saldo -= transacao.valor;
    } else if (Receita.isReceita(transacao)) {
      conta.saldo += transacao.valor;
    } else if (Transferencia.isTransferencia(transacao)) {
      conta.saldo -= transacao.valor;
      const contaDestino = this.obterContaPorId((transacao as Transferencia).contaDestino.id);
      contaDestino.saldo += transacao.valor;
    }
    console.log(transacao);
    localStorage.setItem(this.key, JSON.stringify(this.contas));
  }

  lerDoStorage(): Conta[] {
    return JSON.parse(localStorage.getItem(this.key)) as Conta[];
  }

  mockData() {
    const saveData = this.lerDoStorage();
    if (!saveData) {
      this.contas = [
        new Conta(1, 'NuConta', 100, this.responsavelService.obterResponsavelPorId(1), TipoContaEnum.DEBITO),
        new Conta(2, 'Bradesco', 50, this.responsavelService.obterResponsavelPorId(1), TipoContaEnum.DEBITO),
        new Conta(3, 'NuConta', 200, this.responsavelService.obterResponsavelPorId(2), TipoContaEnum.DEBITO)
      ];
      localStorage.setItem(this.key, JSON.stringify(this.contas));
    } else {
      this.contas = saveData;
    }
  }
}
