import { Routes, RouterModule } from '@angular/router';
import { RedirectGuard } from '@core/services/redirect.guard';

const appRoute: Routes = [
  {
    path: 'dia-das-maes',
    canActivate: [RedirectGuard],
    component: RedirectGuard,
    data: {
      externalUrl: 'https://www.condor.com.br/dia-das-maes/index.html',
    },
  },
  {
    path: 'promocao-peg',
    canActivate: [RedirectGuard],
    component: RedirectGuard,
    data: {
      externalUrl: 'https://www.condor.com.br/promocao-peg/index.html',
    },
  },
  {
    path: 'promocao-kelloggs-parati',
    canActivate: [RedirectGuard],
    component: RedirectGuard,
    data: {
      externalUrl: 'https://www.condor.com.br/promocao-kelloggs-parati/index.html',
    },
  },
  {
    path: 'especialmulher',
    canActivate: [RedirectGuard],
    component: RedirectGuard,
    data: {
      externalUrl: 'https://www.condor.com.br/especial-mulher/index.html',
    },
  },

  {
    path: 'especial-mulher',
    canActivate: [RedirectGuard],
    component: RedirectGuard,
    data: {
      externalUrl: 'https://www.condor.com.br/especial-mulher/index.html',
    },
  },
  {
    path: 'ofertas-combos',
    canActivate: [RedirectGuard],
    component: RedirectGuard,
    data: {
      externalUrl: 'https://www.condor.com.br/ofertas-combos/index.html',
    },
  },
  {
    path: 'cestas-de-natal',
    canActivate: [RedirectGuard],
    component: RedirectGuard,
    data: {
      externalUrl: 'https://www.condor.com.br/cestas-de-natal/index.html',
    },
  },
  {
    path: 'natal',
    canActivate: [RedirectGuard],
    component: RedirectGuard,
    data: {
      externalUrl: 'https://www.condor.com.br/natal/index.html',
    },
  },
  {
    path: 'cestasdenatal',
    canActivate: [RedirectGuard],
    component: RedirectGuard,
    data: {
      externalUrl: 'https://www.condor.com.br/cestas-de-natal/index.html',
    },
  },
  {
    path: 'sortedoce',
    canActivate: [RedirectGuard],
    component: RedirectGuard,
    data: {
      externalUrl: 'https://www.condor.com.br/sortedoce/index.html',
    },
  },
  {
    path: 'dia-das-criancas',
    canActivate: [RedirectGuard],
    component: RedirectGuard,
    data: {
      externalUrl: 'https://www.condor.com.br/dia-das-criancas/index.html',
    },
  },
  {
    path: 'travessuras-ou-gostosuras',
    canActivate: [RedirectGuard],
    component: RedirectGuard,
    data: {
      externalUrl: 'https://www.condor.com.br/travessuras-ou-gostosuras/index.html',
    },
  },
  {
    path: 'jogos',
    canActivate: [RedirectGuard],
    component: RedirectGuard,
    data: {
      externalUrl: 'https://www.condor.com.br/jogos/index.html',
    },
  },
  {
    path: 'maes',
    canActivate: [RedirectGuard],
    component: RedirectGuard,
    data: {
      externalUrl: 'https://www.condor.com.br/dia-das-maes/index.html',
    },
  },
  {
    path: 'autoposto',
    canActivate: [RedirectGuard],
    component: RedirectGuard,
    data: {
      externalUrl: 'https://www.condor.com.br/autoposto/index.html',
    },
  },
  {
    path: 'condor-auto-posto',
    canActivate: [RedirectGuard],
    component: RedirectGuard,
    data: {
      externalUrl: 'https://www.condor.com.br/autoposto/index.html',
    },
  },
  {
    path: 'familiacondor',
    canActivate: [RedirectGuard],
    component: RedirectGuard,
    data: {
      externalUrl: 'https://www.condor.com.br/familiacondor/index.html',
    },
  },
  {
    path: 'catalogo',
    canActivate: [RedirectGuard],
    component: RedirectGuard,
    data: {
      externalUrl: 'https://www.condor.com.br/catalogo/index.html',
    },
  },
  {
    path: 'nissin',
    canActivate: [RedirectGuard],
    component: RedirectGuard,
    data: {
      externalUrl: 'https://www.condor.com.br/nissin/index.html',
    },
  },
  {
    path: 'campanhasolidaria',
    canActivate: [RedirectGuard],
    component: RedirectGuard,
    data: {
      externalUrl: 'https://www.condor.com.br/campanhasolidaria/index.html',
    },
  },
  {
    path: 'frisco',
    canActivate: [RedirectGuard],
    component: RedirectGuard,
    data: {
      externalUrl: 'https://www.condor.com.br/frisco/index.html',
    },
  },
  {
    path: 'femsa',
    canActivate: [RedirectGuard],
    component: RedirectGuard,
    data: {
      externalUrl: 'https://www.condor.com.br/femsa/index.html',
    },
  },
  {
    path: 'promocao-nestle-mais-sabor',
    canActivate: [RedirectGuard],
    component: RedirectGuard,
    data: {
      externalUrl:
        'https://www.condor.com.br/promocao-nestle-mais-sabor/index.html',
    },
  },
  {
    path: 'limpeza',
    canActivate: [RedirectGuard],
    component: RedirectGuard,
    data: {
      externalUrl: 'https://www.condor.com.br/limpeza/index.html',
    },
  },
  {
    path: 'marilan',
    canActivate: [RedirectGuard],
    component: RedirectGuard,
    data: {
      externalUrl: 'https://www.condor.com.br/marilan/index.html',
    },
  },
  {
    path: 'aniversario',
    canActivate: [RedirectGuard],
    component: RedirectGuard,
    data: {
      externalUrl: 'https://www.condor.com.br/aniversario/index.html',
    },
  },
  {
    path: 'delivery',
    canActivate: [RedirectGuard],
    component: RedirectGuard,
    data: {
      externalUrl: 'https://www.condor.com.br/delivery/index.html',
    },
  },
  {
    path: 'gourmet',
    canActivate: [RedirectGuard],
    component: RedirectGuard,
    data: {
      externalUrl: 'https://www.condor.com.br/gourmet/index.html',
    },
  },
  {
    path: 'ofertas-bebe',
    canActivate: [RedirectGuard],
    component: RedirectGuard,
    data: {
      externalUrl: 'https://www.condor.com.br/ofertas-bebe/index.html',
    },
  },
  {
    path: 'coronavirus',
    canActivate: [RedirectGuard],
    component: RedirectGuard,
    data: {
      externalUrl: 'https://www.condor.com.br/coronavirus/index.html',
    },
  },
  {
    path: 'sabores-de-inverno',
    canActivate: [RedirectGuard],
    component: RedirectGuard,
    data: {
      externalUrl: 'https://www.condor.com.br/sabores-de-inverno/index.html',
    },
  },
  {
    path: 'promocao-dia-dos-namorados',
    canActivate: [RedirectGuard],
    component: RedirectGuard,
    data: {
      externalUrl:
        'https://www.condor.com.br/promocao-dia-dos-namorados/index.html',
    },
  },
  {
    path: 'pet-shop',
    canActivate: [RedirectGuard],
    component: RedirectGuard,
    data: {
      externalUrl:
        'https://www.condor.com.br/pet-shop/index.html',
    },
  },
  {
    path: 'compra-solidaria',
    canActivate: [RedirectGuard],
    component: RedirectGuard,
    data: {
      externalUrl: 'https://www.condor.com.br/compra-solidaria/index.html',
    },
  },
  {
    path: 'outono-inverno',
    canActivate: [RedirectGuard],
    component: RedirectGuard,
    data: {
      externalUrl: 'https://www.condor.com.br/outono-inverno/index.html',
    },
  },
  {
    path: 'pais',
    canActivate: [RedirectGuard],
    component: RedirectGuard,
    data: {
      externalUrl: 'https://www.condor.com.br/dia-dos-pais/index.html',
    },
  },
  {
    path: 'dia-dos-pais',
    canActivate: [RedirectGuard],
    component: RedirectGuard,
    data: {
      externalUrl: 'https://www.condor.com.br/dia-dos-pais/index.html',
    },
  },
  {
    path: 'promocoes',
    canActivate: [RedirectGuard],
    component: RedirectGuard,
    data: {
      externalUrl: 'https://www.condor.com.br/promocoes/index.html',
    },
  },
  {
    path: 'black-friday',
    canActivate: [RedirectGuard],
    component: RedirectGuard,
    data: {
      externalUrl: 'https://www.condor.com.br/black-friday/index.html',
    },
  },
  {
    path: 'dinheiro-de-volta',
    canActivate: [RedirectGuard],
    component: RedirectGuard,
    data: {
      externalUrl: 'https://www.condor.com.br/dinheiro-de-volta/index.html',
    },
  },
  {
    path: 'mepatrocina',
    canActivate: [RedirectGuard],
    component: RedirectGuard,
    data: {
      externalUrl: 'https://www.condor.com.br/mepatrocina/index.html',
    },
  },
  {
    path: 'pascoa',
    canActivate: [RedirectGuard],
    component: RedirectGuard,
    data: {
      externalUrl: 'https://www.condor.com.br/pascoa/index.html',
    },
  },
  {
    path: 'ofertas-pascoa',
    canActivate: [RedirectGuard],
    component: RedirectGuard,
    data: {
      externalUrl: 'https://www.condor.com.br/ofertas-pascoa/index.html',
    },
  },
  {
    path: 'sabor-da-sorte',
    canActivate: [RedirectGuard],
    component: RedirectGuard,
    data: {
      externalUrl: 'https://www.condor.com.br/sabor-da-sorte/index.html',
    },
  },
  {
    path: 'especialmulher',
    canActivate: [RedirectGuard],
    component: RedirectGuard,
    data: {
      externalUrl: 'https://www.condor.com.br/especial-mulher/index.html',
    },
  },
  {
    path: 'especial-mulher',
    canActivate: [RedirectGuard],
    component: RedirectGuard,
    data: {
      externalUrl: 'https://www.condor.com.br/especial-mulher/index.html',
    },
  },
];

export const EXTERNAL_ROUTES = RouterModule.forChild(appRoute);
