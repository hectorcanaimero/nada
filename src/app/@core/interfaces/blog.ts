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

export interface Post {
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

export interface Categories {
  id:          number;
  count:       number;
  description: string;
  link:        string;
  name:        string;
  slug:        string;
  taxonomy:    string;
  parent:      number;
  meta:        any[];
  _links:      Links;
}

export interface Links {
  self:           About[];
  collection:     About[];
  about:          About[];
  "wp:post_type": About[];
  curies:         Cury[];
}

export interface About {
  href: string;
}

export interface Cury {
  name:      string;
  href:      string;
  templated: boolean;
}
