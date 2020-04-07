import { ContaService } from './conta.service';
import { ResponsavelService } from './responsavel.service';
import { Transferencia } from '../model/transferencia';
import { Injectable } from '@angular/core';
import {Transacao} from '../model/transacao';
import { Despesa } from '../model/despesa';
import { Receita } from '../model/receita';
import { CategoriaDespesaEnum } from '../model/categoriaDespesa.enum';
import { TipoRendaEnum } from '../model/tipoRenda.enum';

@Injectable({
  providedIn: 'root'
})
export class TransacaoService {

  private transacoes: Transacao[] = [];

  constructor(private responsavelService: ResponsavelService, private contaService: ContaService) {
    const transacao1 = new Despesa(1, new Date(), 1.5, 'teste 1',
                                  this.responsavelService.obterResponsavelPorId(1),
                                  this.contaService.obterContaPorId(1), CategoriaDespesaEnum.ALIMENTACAO);
    transacao1.categoria = CategoriaDespesaEnum.MERCADO;
    this.transacoes.push(transacao1);

    const transacao2 = new Receita(2,  new Date(), 20, 'teste 2',
        this.responsavelService.obterResponsavelPorId(1),
        this.contaService.obterContaPorId(1),
        TipoRendaEnum.SALARIO);
    transacao2.tipoRenda = TipoRendaEnum.SALARIO;
    this.transacoes.push(transacao2);

    const transacao3 = new Transferencia(3, new Date(), 5, 'teste 3',
        this.responsavelService.obterResponsavelPorId(1),
        this.contaService.obterContaPorId(1),
        this.contaService.obterContaPorId(2));
    transacao3.contaDestino = this.contaService.obterContaPorId(2);
    this.transacoes.push(transacao3);
  }

  obterTodasTransacoes(): Transacao[] {
    return this.transacoes;
  }

  salvarTransacao(transacao: Transacao): void {
    transacao.id = this.transacoes.length + 1;
    this.transacoes.push(transacao);
    this.contaService.alterarSaldoConta(transacao);
  }

}

