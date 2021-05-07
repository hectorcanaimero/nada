export interface MenuDepartamento {
  codigo: number;
  nome: string;
  slug?: string;
  campanha?: boolean;
}

export interface MenuSetor {
  codigo: number;
  nome: string;
  dep_id: number;
}
