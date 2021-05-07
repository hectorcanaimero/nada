export interface Static {
  id:           number;
  name:         string;
  slug:         string;
  data:         Datum[] | DataClass;
  published_at: Date;
  created_at:   Date;
  updated_at:   Date;
}

export interface Datum {
  type:   string;
  titulo: string;
  code:   number | string;
  icon:   string;
  link:   string;
}

export interface DataClass {
  title?:           string;
  center?:          Center[];
  mobile?:          Center[];
  campanha?:        Campanha[];
  "mobile-center"?: MobileCenter[];
  header?:          Buttom[];
  logo?:            string;
  copyright?:       string;
  institucional?:   Center[] | Acoes;
  servicos?:        MobileCenter[] | Acoes;
  midia?:           Midia[];
  buttom?:          Buttom[];
  trabalhe?:        Denuncia[];
  empresa?:         Acoes;
  financeiro?:      Financeiro;
  fornecedores?:    Denuncia[];
  denuncia?:        Denuncia[];
  sac?:             Denuncia[];
  acoes?:           Acoes;
  menu?:            Buttom[];
}

export interface Acoes {
  title: string;
  menu:  Denuncia[];
}

export interface Denuncia {
  nome: string;
  url:  string;
}

export interface Buttom {
  icon:        string;
  iconmobile?: string;
  name:        string;
  url:         string;
  external?:   boolean;
  type?:       string;
}

export interface Campanha {
  codigo:   number;
  nome:     string;
  slug:     string;
  campanha: boolean;
}

export interface Center {
  name:      string;
  url:       string;
  external?: boolean;
}

export interface Financeiro {
  title: string;
  menu:  Menu[];
}

export interface Menu {
  nome:     string;
  url:      string;
  external: boolean;
}

export interface Midia {
  icon: string;
  url:  string;
}

export interface MobileCenter {
  name: string;
  url:  string;
}
