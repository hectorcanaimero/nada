import { Routes, RouterModule } from '@angular/router';
import { QuicklinkStrategy } from 'ngx-quicklink';

const app: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./@pages/home/home.module').then(mod => mod.HomeModule) },
  { path: 'institucional', loadChildren: () => import('./@pages/news/news.module').then(mod => mod.NewsModule) },
  { path: 'tabloide-online', loadChildren: () => import('./@pages/tabloide/tabloide.module').then(mod => mod.TabloideModule) },
  { path: 'lojas', loadChildren: () => import('./@pages/lojas/lojas.module').then(mod => mod.LojasModule) },

  { path: 'produto', loadChildren: () => import('./@pages/ofertas/product-id/product-id.module').then(mod => mod.ProductIdModule) },
  { path: 'campanha', loadChildren: () => import('./@pages/ofertas/campanha/campanha.module').then(mod => mod.CampanhaModule) },
  { path: 'departamento', loadChildren: () => import('./@pages/ofertas/departamento/departamento.module').then(mod => mod.DepartamentoModule) },



  { path: 'clubecondor', redirectTo: 'fale-conosco/baixe-o-app'},
  { path: 'combo', redirectTo: 'servicos-financeiro/combo-eletro-36x'},
  { path: 'trabalhe-conosco', redirectTo: 'fale-conosco/trabalhe-conosco'},
  { path: 'radar-de-ofertas', redirectTo: 'institucional/radar-de-ofertas', },
  { path: 'cartao-presente', redirectTo: 'para-sua-empresa/cartao-presente-condor' },
  { path: 'blog', loadChildren: () => import('./pages/blog/blog.module').then(mod => mod.BlogModule)},
  { path: 'receitas', loadChildren: () => import('./pages/blog/blog.module').then(mod => mod.BlogModule) },
  { path: 'fale-conosco/sac', loadChildren: () => import('./pages/sac/sac.module').then(mod => mod.SacModule) },
  { path: 'fale-conosco', loadChildren: () => import('./@pages/news/news.module').then(mod => mod.NewsModule) },
  { path: 'acoes-condor', loadChildren: () => import('./@pages/news/news.module').then(mod => mod.NewsModule) },
  { path: 'institucional/imprensa', loadChildren: () => import('./pages/imprensa/imprensa.module').then(mod => mod.ImprensaModule) },
  { path: 'para-sua-empresa', loadChildren: () => import('./@pages/news/news.module').then(mod => mod.NewsModule) },
  { path: 'servicos-financeiro', loadChildren: () => import('./@pages/news/news.module').then(mod => mod.NewsModule) },
  { path: 'pesquisa-usuario', loadChildren: () => import('./@pages/ofertas/search/search.module').then(mod => mod.SearchModule) },
];

export const APP_ROUTE = RouterModule.forRoot(app, { scrollPositionRestoration: 'enabled', preloadingStrategy: QuicklinkStrategy });
