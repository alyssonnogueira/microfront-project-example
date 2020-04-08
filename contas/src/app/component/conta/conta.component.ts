import { ContaModalComponent } from './../conta-modal/conta-modal.component';
import { ContaService } from '../../services/conta.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { Conta } from '../../model/conta';

@Component({
  selector: 'contas-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.css']
})
export class ContaComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'saldo', 'responsavel', 'tipoConta'];
  dataSource: MatTableDataSource<Conta>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private contaService: ContaService, public dialog: MatDialog ) {
    this.dataSource = new MatTableDataSource(contaService.obterTodasContas());
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

  adicionarConta() {
    const dialogRef = this.dialog.open(ContaModalComponent, {
      width: '800px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.contaService.salvarConta(result);
      this.dataSource.data = this.contaService.obterTodasContas();
    });
  }
}
