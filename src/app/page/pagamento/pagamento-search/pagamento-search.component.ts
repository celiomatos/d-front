import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'der-pagamento-search',
  templateUrl: './pagamento-search.component.html',
  styleUrls: ['./pagamento-search.component.scss']
})
export class PagamentoSearchComponent implements OnInit {
  valor = '5455-tete';
  constructor(private dialogRef: MatDialogRef<PagamentoSearchComponent>) {}

  ngOnInit() {}

  search() {
    this.dialogRef.close();
  }
}
