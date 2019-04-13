import { Classificacao } from 'src/app/page/classificacao/shared/classificacao.model';
import { Credor } from 'src/app/page/credor/shared/credor.model';
import { Fonte } from 'src/app/page/fonte/shared/fonte.model';
import { Orgao } from 'src/app/page/orgao/shared/orgao.model';

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
