export const environment = {
  production: true,
  intranet: 'https://teste.condor.com.br/news/wp-json/wp/v2',
  v1: {
    url: 'https://marketing.condor.com.br/api',
    key: ''
  },
  v2: {
    url: 'https://painel.condor.com.br',
  },
  news: {
    url: 'https://teste.condor.com.br/news/wp-json/wp/v2',
    key: 'Basic Y29uZG9yOmFkbWluMTIzIUAj'
  },
  blog: {
    url: 'https://teste.condor.com.br/blog/wp-json/wp/v2',
    key: 'Basic Y29uZG9yOmFkbWluMTIz',
  },
  responsive: {
    breakPoints: {
      xs: {max: 600},
      sm: {min: 601, max: 959},
      md: {min: 960, max: 1279},
      lg: {min: 1280, max: 1919},
      xl: {min: 1920}
    },
    debounceTime: 100
  },
  cookieDomain: 'htpps://www.condor.com.br',
  loja:  { loja: 21, slug: 'hiper-condor-nilo-pecanha', nome: 'Hiper Condor Nilo Peçanha' }
};
