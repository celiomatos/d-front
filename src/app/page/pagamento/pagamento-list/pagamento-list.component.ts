import { PagamentoSearchComponent } from './../pagamento-search/pagamento-search.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatTableDataSource, MatPaginator, PageEvent } from '@angular/material';
import { PagamentoService } from '../shared/pagamento.service';
import { Pagamento } from '../shared/pagamento.model';
import { PagamentoSearch } from '../shared/pagamento.dto';
import { TopFiveOrgaos } from 'src/app/core/dto/top-five-orgaos.dto';

@Component({
  selector: 'der-pagamento-list',
  templateUrl: './pagamento-list.component.html',
  styleUrls: ['./pagamento-list.component.scss']
})
export class PagamentoListComponent implements OnInit {
  tableColumns = ['orgao', 'credor', 'data', 'valor', 'nrob', 'nrnl', 'nrne', 'fonte', 'classificacao'];
  dataSource = new MatTableDataSource<Pagamento>();
  page = 0;
  size = 10;
  totalElements = 0;
  searchDto = new PagamentoSearch();
  topFiveOrgao: TopFiveOrgaos[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private dialog: MatDialog, private pagamentoService: PagamentoService) {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.findPagamentos();
  }

  findPagamentos() {
    this.searchDto.page = this.page;
    this.searchDto.size = this.size;
    this.pagamentoService.findAll(this.searchDto).subscribe(
      data => {
        this.dataSource.data = this.dataSource.data.concat(data.content);
        this.totalElements = data.totalElements;
      },
      error => {
        console.log(error);
      }
    );
  }

  changePageSize(value: number) {
    this.page = 0;
    this.size = value;
    this.paginator.pageIndex = 0;
    this.dataSource.data = [];
    this.totalElements = 0;
    this.findPagamentos();
  }

  changePage(event: PageEvent) {
    this.page = Math.ceil(this.dataSource.data.length / this.size - 1);
    if (this.page < event.pageIndex) {
      this.page = event.pageIndex;
      this.totalElements = 0;
      this.findPagamentos();
    }
  }

  search() {
    const dialogRef = this.dialog.open(PagamentoSearchComponent, {
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(() => {
      console.log('nada');
      this.searchDto = dialogRef.componentInstance.searchDto;
      this.findPagamentos();
    });
  }

  topFiveOrgaos(dateIinicial?: Date, dateFinal?: Date) {
    this.pagamentoService.topFiveOrgaos(undefined, undefined).subscribe(
      data => {
        this.topFiveOrgao = data;
      },
      error => {
        console.log(error);
      }
    );
  }
}
