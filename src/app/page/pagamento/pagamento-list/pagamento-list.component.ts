import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatTableDataSource, PageEvent } from '@angular/material';
import { PagamentoSearch } from '../shared/pagamento.dto';
import { Pagamento } from '../shared/pagamento.model';
import { PagamentoService } from '../shared/pagamento.service';
import { PagamentoSearchComponent } from './../pagamento-search/pagamento-search.component';

@Component({
  selector: 'der-pagamento-list',
  templateUrl: './pagamento-list.component.html',
  styleUrls: ['./pagamento-list.component.scss']
})
export class PagamentoListComponent implements OnInit {
  tableColumns = ['orgao', 'credor', 'data', 'valor', 'nrob', 'nrnl', 'nrne', 'fonte', 'classificacao'];
  dataSource = new MatTableDataSource<Pagamento>();
  page = 0;
  size = 5;
  totalElements = 0;
  searchDto = new PagamentoSearch();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private dialog: MatDialog, private pagamentoService: PagamentoService) {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.findPagamentos();
  }

  findPagamentos() {
    this.searchDto.page = this.page;
    this.searchDto.size = this.size;
    this.pagamentoService.search(this.searchDto).subscribe(
      data => {
        this.dataSource.data = this.dataSource.data.concat(data.content);
        this.totalElements = data.totalElements;
      },
      error => {
        console.log(error);
      }
    );
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
      this.searchDto = dialogRef.componentInstance.searchDto;
      if (this.searchDto !== null) {
        this.page = 0;
        this.dataSource.data = [];
        this.findPagamentos();
      }
    });
  }

  excel() {
    const searchDto = new PagamentoSearch();
    this.pagamentoService.excell(searchDto).subscribe(data => {
      const file = new Blob([data], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      });

      const pdf = URL.createObjectURL(file);
      window.location.href = pdf;
    });
  }
}
