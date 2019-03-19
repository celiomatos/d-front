import { Credor } from 'src/app/core/model/credor.model';
import { Classificacao } from 'src/app/core/model/classificacao.model';
import { Fonte } from 'src/app/core/model/fonte.model';
import { Orgao } from 'src/app/core/model/orgao.model';

export class Pagamento {
  id: number;
  data: Date;
  nrOb: string;
  nrNl: string;
  nrNe: string;
  valor: number;
  lancamento: Date;
  removido: boolean;
  classificacao: Classificacao;
  credor: Credor;
  fonte: Fonte;
  orgao: Orgao;
}
