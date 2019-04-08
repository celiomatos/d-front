import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { OrgaoService } from 'src/app/core/http/orgao.service';
import { PagamentoSearch } from '../shared/pagamento.dto';
import { ClassificacaoService } from './../../../core/http/classificacao.service';
import { CredorService } from './../../../core/http/credor.service';
import { FonteService } from './../../../core/http/fonte.service';
import { M6S } from './../../../core/shared/messages';

@Component({
  selector: 'der-pagamento-search',
  templateUrl: './pagamento-search.component.html',
  styleUrls: ['./pagamento-search.component.scss']
})
export class PagamentoSearchComponent implements OnInit {
  m6s = M6S;
  formValidation: FormGroup;
  searchDto: PagamentoSearch;

  constructor(
    private dialogRef: MatDialogRef<PagamentoSearchComponent>,
    public orgaoService: OrgaoService,
    public fonteService: FonteService,
    public classificacaoService: ClassificacaoService,
    public credorService: CredorService
  ) {}

  ngOnInit() {
    this.formValidation = new FormGroup({
      orgaos: new FormControl([]),
      fontes: new FormControl([]),
      classificacoes: new FormControl([]),
      credores: new FormControl([]),
      dataInicial: new FormControl(),
      dataFinal: new FormControl(),
      valorInicial: new FormControl('', [Validators.max(2147483647)]),
      valorFinal: new FormControl('', [Validators.max(2147483647)])
    });
  }

  cancelar() {
    this.searchDto = null;
    this.dialogRef.close();
  }

  search() {
    this.searchDto = new PagamentoSearch();
    this.searchDto.dataInicial = this.formValidation.get('dataInicial').value;
    this.searchDto.dataFinal = this.formValidation.get('dataFinal').value;
    this.searchDto.valorInicial = this.formValidation.get('valorInicial').value;
    this.searchDto.valorFinal = this.formValidation.get('valorFinal').value;
    this.searchDto.orgaos = this.formValidation.get('orgaos').value;
    this.searchDto.fontes = this.formValidation.get('fontes').value;
    this.searchDto.classificacoes = this.formValidation.get('classificacoes').value;
    this.searchDto.credores = this.formValidation.get('credores').value;
    this.dialogRef.close();
  }
}
