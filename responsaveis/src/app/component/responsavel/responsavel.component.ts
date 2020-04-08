import { ResponsavelModalComponent } from './../responsavel-modal/responsavel-modal.component';
import { ResponsavelService } from './../../services/responsavel.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Responsavel } from 'src/app/model/responsavel';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';

@Component({
  selector: 'responsaveis-responsavel',
  templateUrl: './responsavel.component.html',
  styleUrls: ['./responsavel.component.css']
})
export class ResponsavelComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome'];
  dataSource: MatTableDataSource<Responsavel>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private responsavelService: ResponsavelService, public dialog: MatDialog ) {
    this.dataSource = new MatTableDataSource(responsavelService.obterTodosResponsaveis());
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
    const dialogRef = this.dialog.open(ResponsavelModalComponent, {
      width: '400px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.responsavelService.salvarResponsavel(result);
      this.dataSource.data = this.responsavelService.obterTodosResponsaveis();
    });
  }

}
