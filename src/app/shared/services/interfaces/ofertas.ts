export interface Ofertas {
  [x: string]: any;
  id?: number;
  campanhaId?: number;
  campanha?: number;
  hostId?: number;
  host?: number;
  loja?: number;
  departamento?: number;
  slug?: string;
  preco_regular?: number;
  parcela_regular?: number;
  qtd_regular?: number;
  preco_clube?: number;
  parcela_clube?: number;
  qtd_clube?: number;
  preco_cash?: number;
  dsc_kit?: any;
  cod_kit?: any;
  produtos?: Produtos;
  c_at?: Date;
}


export interface Produtos {
  id?: number;
  cod_campanha?: number;
  slugCampanha?: string;
  cod_produto?: number;
  dsc_produto?: string;
  dsc_descricao?: string;
  dsc_kit?: any;
  embalagem?: string;
  departamento?: number;
  dsc_departamento?: string;
  setor?: number;
  dsc_setor?: string;
  start?: Date;
  end?: Date;
  slug?: string;
  image?: string;
  legal?: any;
  status: number;
  c_at?: any;
  campanhaId?: any;
}

