import { PagamentoSearchComponent } from './../pagamento-search/pagamento-search.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'der-pagamento-list',
  templateUrl: './pagamento-list.component.html',
  styleUrls: ['./pagamento-list.component.scss']
})
export class PagamentoListComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  search() {
    const dialogRef = this.dialog.open(PagamentoSearchComponent, {
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(() => {
      console.log('nada');
      console.log(dialogRef.componentInstance.valor);
    });
  }
}
