import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { PagamentoSearch } from '../shared/pagamento.dto';

@Component({
  selector: 'der-pagamento-search',
  templateUrl: './pagamento-search.component.html',
  styleUrls: ['./pagamento-search.component.scss']
})
export class PagamentoSearchComponent implements OnInit {
  searchDto = new PagamentoSearch();

  constructor(private dialogRef: MatDialogRef<PagamentoSearchComponent>) {}

  ngOnInit() {}

  search() {
    this.dialogRef.close();
  }
}
