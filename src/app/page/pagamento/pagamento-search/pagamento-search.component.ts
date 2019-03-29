import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { OrgaoService } from 'src/app/core/http/orgao.service';
import { Orgao } from 'src/app/core/model/orgao.model';
import { PagamentoSearch } from '../shared/pagamento.dto';

@Component({
  selector: 'der-pagamento-search',
  templateUrl: './pagamento-search.component.html',
  styleUrls: ['./pagamento-search.component.scss']
})
export class PagamentoSearchComponent implements OnInit {
  formValidation: FormGroup;
  searchDto = new PagamentoSearch();
  orgaoList: Orgao[] = [];

  page = 0;
  last = false;

  constructor(private dialogRef: MatDialogRef<PagamentoSearchComponent>, public orgaoService: OrgaoService) {}

  ngOnInit() {
    this.formValidation = new FormGroup({
      orgaos: new FormControl([]),
      dataInicial: new FormControl()
    });
    this.paginated();
  }

  loadNext() {
    this.paginated();
  }

  paginated() {
    if (!this.last) {
      this.orgaoService.findAll(this.page).subscribe(
        (data: any) => {
          this.orgaoList = this.orgaoList.concat(data.content);
          this.page++;
          this.last = data.last;
        },
        (error: any) => {
          console.log(error);
        }
      );
    }
  }

  search() {
    console.log(this.formValidation.get('dataInicial').value);
    this.searchDto.dataInicial = this.formValidation.get('dataInicial').value;
    this.searchDto.orgaos = this.formValidation.get('orgaos').value;
    this.dialogRef.close();
  }
}
