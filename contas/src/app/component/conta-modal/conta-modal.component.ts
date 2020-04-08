import { TipoContaEnum } from '../../model/tipoConta.enum';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Conta } from '../../model/conta';
import { ResponsavelService } from '../../services/responsavel.service';
import { Responsavel } from '../../model/responsavel';

@Component({
  selector: 'contas-conta-modal',
  templateUrl: './conta-modal.component.html',
  styleUrls: ['./conta-modal.component.css']
})
export class ContaModalComponent implements OnInit {

  tipoContaEnum = TipoContaEnum;
  keys = Object.keys;

  constructor(
    public dialogRef: MatDialogRef<ContaModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Conta,
    private responsavelService: ResponsavelService) { }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    this.dialogRef.close(Conta.jsonToConta(this.data));
  }

  ngOnInit() {
  }

  get responsaveis(): Responsavel[] {
    return this.responsavelService.obterTodosResponsaveis();
  }
}
