import { Transferencia } from '../../model/transferencia';
import { Receita } from '../../model/receita';
import { Despesa } from '../../model/despesa';
import { ContaService } from '../../services/conta.service';
import { ResponsavelService } from '../../services/responsavel.service';
import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Transacao } from '../../model/transacao';
import { TipoTransacaoEnum } from '../../model/tipoTransacao.enum';
import { Responsavel } from '../../model/responsavel';
import { Conta } from '../../model/conta';
import { CategoriaDespesaEnum } from '../../model/categoriaDespesa.enum';
import { TipoRendaEnum } from '../../model/tipoRenda.enum';


@Component({
  selector: 'transacoes-transacao-modal',
  templateUrl: './transacao-modal.component.html',
  styleUrls: ['./transacao-modal.component.css']
})
export class TransacaoModalComponent implements OnInit {

  tipoTransacaoEnum = TipoTransacaoEnum;
  tipoTransacao = TipoTransacaoEnum.DESPESA;
  keys = Object.keys;
  categoriaEnum = CategoriaDespesaEnum;
  tipoRendaEnum = TipoRendaEnum;

  constructor(
    public dialogRef: MatDialogRef<TransacaoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Transacao,
    private responsavelService: ResponsavelService,
    private contaService: ContaService) { }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.isDespesa) {
      this.dialogRef.close(Despesa.jsonToDespesa(this.data));
    }

    if (this.isReceita) {
      this.dialogRef.close(Receita.jsonToDespesa(this.data));
    }

    if (this.isTranferencia) {
      this.dialogRef.close(Transferencia.jsonToDespesa(this.data));
    }
  }

  ngOnInit() {
  }

  get responsaveis(): Responsavel[] {
    return this.responsavelService.obterTodosResponsaveis();
  }

  get contas(): Conta[] {
    return this.data.responsavel != null ? this.contaService.obterContaPorIdResponsavel(this.data.responsavel.id) : [];
  }

  get isDespesa(): boolean {
    return TipoTransacaoEnum[this.tipoTransacao] === TipoTransacaoEnum.DESPESA;
  }

  get isReceita(): boolean {
    return TipoTransacaoEnum[this.tipoTransacao] === TipoTransacaoEnum.RECEITA;
  }

  get isTranferencia(): boolean {
    return TipoTransacaoEnum[this.tipoTransacao] === TipoTransacaoEnum.TRANSFERENCIA;
  }
}
