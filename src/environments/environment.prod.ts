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
      xs: {max: 359},
      sm: {min: 360, max: 450},
      md: {min: 451, max: 769},
      lg: {min: 770, max: 1024},
      xl: {min: 1025}
    },
    debounceTime: 100
  },
  cookieDomain: 'htpps://www.condor.com.br',
  cookies: ['cookie.header', 'cookie.message', 'cookie.dismiss', 'cookie.allow',
  'cookie.deny', 'cookie.link', 'cookie.policy', 'cookie.href'],
  loja:  { loja: 21, slug: 'hiper-condor-nilo-pecanha', nome: 'Hiper Condor Nilo Peçanha' }
};
