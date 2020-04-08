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

  constructor(private responsavelService: ResponsavelService) {
    this.contas = [
      new Conta(1, 'NuConta', 100, responsavelService.obterResponsavelPorId(1), TipoContaEnum.DEBITO),
      new Conta(2, 'Bradesco', 50, responsavelService.obterResponsavelPorId(1), TipoContaEnum.DEBITO),
      new Conta(3, 'NuConta', 200, responsavelService.obterResponsavelPorId(2), TipoContaEnum.DEBITO)
    ];
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
  }

  alterarSaldoConta(transacao: Transacao) {
    const conta = this.obterContaPorId(transacao.conta.id);
    if (transacao instanceof Despesa) {
      conta.saldo -= transacao.valor;
    } else if (transacao instanceof Receita) {
      conta.saldo += transacao.valor;
    } else if (transacao instanceof Transferencia) {
      conta.saldo -= transacao.valor;
      const contaDestino = this.obterContaPorId(transacao.contaDestino.id);
      contaDestino.saldo += transacao.valor;
    }
  }
}
