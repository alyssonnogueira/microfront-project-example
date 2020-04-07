import { Transferencia } from '../../model/transferencia';
import { TipoTransacaoEnum } from '../../model/tipoTransacao.enum';
import { Receita } from '../../model/receita';
import { Despesa } from '../../model/despesa';
import { TransacaoService } from '../../services/transacao.service';
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Transacao} from '../../model/transacao';
import { TransacaoModalComponent } from '../transacao-modal/transacao-modal.component';
import {MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'transacoes-transacao',
  templateUrl: './transacao.component.html',
  styleUrls: ['./transacao.component.css']
})
export class TransacaoComponent implements OnInit {

  displayedColumns: string[] = ['id', 'data', 'valor', 'descricao', 'responsavel', 'tipoPagamento', 'conta', 'tipoTransacao'];
  dataSource: MatTableDataSource<Transacao>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private transacaoService: TransacaoService, public dialog: MatDialog ) {
    this.dataSource = new MatTableDataSource(transacaoService.obterTodasTransacoes());
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  adicionarTransacao() {
    const dialogRef = this.dialog.open(TransacaoModalComponent, {
      width: '800px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.transacaoService.salvarTransacao(result);
      this.dataSource.data = this.transacaoService.obterTodasTransacoes();
    });
  }

  obterTipoTransacao(transacao): string {
    if (transacao instanceof Despesa) {
      return TipoTransacaoEnum.DESPESA;
    }
    if (transacao instanceof Receita) {
      return TipoTransacaoEnum.RECEITA;
    }
    if (transacao instanceof Transferencia) {
      return TipoTransacaoEnum.TRANSFERENCIA;
    }
    return '';
  }

  obterClasseTransacao(transacao): string {
    const tipoTransacao = this.obterTipoTransacao(transacao);
    let classe = '';
    switch (tipoTransacao) {
      case TipoTransacaoEnum.DESPESA: classe = 'despesa'; break;
      case TipoTransacaoEnum.RECEITA: classe = 'receita'; break;
      case TipoTransacaoEnum.TRANSFERENCIA: classe = 'transferencia'; break;
    }
    return classe;
  }
}
