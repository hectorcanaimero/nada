export interface Imagens {
  id: number;
  date?: string;
  slug?: string;
  status?: string;
  link?: string;
  title?: string;
  featured_media?: number;
  url?: string;
  position?: string;
  thumbnail?: string;
  medium?: string;
  full?: string;
  webp?: string;
}

export interface Page {
  id: number;
  slug?: string;
  title?: string;
  link?: string;
  featured_media?: number;
  thumbnail?: string;
  medium?: string;
  full?: string;
  content?: string;
}

export interface Materia {
  id: number;
  slug?: string;
  title?: string;
  link?: string;
  featured_media?: number;
  thumbnail?: string;
  medium?: string;
  full?: string;
  content?: string;
}


export interface Campanha {
  id: number;
  date?: string;
  slug?: string;
  status?: string;
  link?: string;
  title?: string;
  featured_media?: number;
  url?: string;
  position?: string;
  thumbnail?: string;
  medium?: string;
  full?: string;
  home?: string;
  ordem?: number;
  texto?: string;
}

export interface Loja {
  id: number;
  date?: string;
  slug?: string;
  link?: string;
  title?: string;
  thumbnail?: string;
  medium?: string;
  full?: string;
  region: string;
  lat?: string;
  lng?: string;
  cidade?: string;
  setores?: string;
  servicos?: string;
}

export interface Tabloide {
  id: number;
  date?: string;
  slug?: string;
  link?: string;
  title?: string;
  issuu?: string;
  lat?: string;
}


export interface Lojas {
  id:        number;
  slug:      string;
  status:    string;
  title:     any;
  content:   any;
  title1:    string;
  content1:  string;
  thumbnail: string;
  medium:    string;
  full:      string;
  region:    string;
  cidade:    string;
  cod_loja:  string;
  lng:       string;
  lat:       string;
  servicos:  string;
  setores:   string;
  telefone:  string;
  maps:      string;
  avaliacao: string;
}
