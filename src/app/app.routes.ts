import { Routes, RouterModule } from '@angular/router';
import { QuicklinkStrategy } from 'ngx-quicklink';

const app: Routes = [
  { path: 'clubecondor', redirectTo: 'fale-conosco/baixe-o-app'},
  { path: 'combo', redirectTo: 'servicos-financeiro/combo-eletro-36x'},
  { path: 'trabalhe-conosco', redirectTo: 'fale-conosco/trabalhe-conosco'},
  { path: 'radar-de-ofertas', redirectTo: 'institucional/radar-de-ofertas', },
  { path: 'cartao-presente', redirectTo: 'para-sua-empresa/cartao-presente-condor' },
  { path: '', loadChildren: () => import('./pages/home/home.module').then(mod => mod.HomeModule) },
  { path: 'blog', loadChildren: () => import('./pages/blog/blog.module').then(mod => mod.BlogModule)},
  { path: 'receitas', loadChildren: () => import('./pages/blog/blog.module').then(mod => mod.BlogModule) },
  { path: 'lojas', loadChildren: () => import('./pages/lojas/lojas.module').then(mod => mod.LojasModule) },
  { path: 'fale-conosco/sac', loadChildren: () => import('./pages/sac/sac.module').then(mod => mod.SacModule) },
  { path: 'fale-conosco', loadChildren: () => import('./pages/news/news.module').then(mod => mod.NewsModule) },
  { path: 'acoes-condor', loadChildren: () => import('./pages/news/news.module').then(mod => mod.NewsModule) },
  { path: 'institucional/imprensa', loadChildren: () => import('./pages/imprensa/imprensa.module').then(mod => mod.ImprensaModule) },
  { path: 'institucional', loadChildren: () => import('./pages/news/news.module').then(mod => mod.NewsModule) },
  { path: 'para-sua-empresa', loadChildren: () => import('./pages/news/news.module').then(mod => mod.NewsModule) },
  { path: 'servicos-financeiro', loadChildren: () => import('./pages/news/news.module').then(mod => mod.NewsModule) },
  { path: 'produto', loadChildren: () => import('./pages/ofertas/detail/detail.module').then(mod => mod.DetailModule) },
  { path: 'tabloide-online', loadChildren: () => import('./pages/tabloide/tabloide.module').then(mod => mod.TabloideModule) },
  { path: 'campanha', loadChildren: () => import('./pages/ofertas/campanha/campanha.module').then(mod => mod.CampanhaModule) },
  { path: 'pesquisa-usuario', loadChildren: () => import('./pages/ofertas/search/search.module').then(mod => mod.SearchModule) },
  { path: 'departamento', loadChildren: () => import('./pages/ofertas/departamento/departamento.module').then(mod => mod.DepartamentoModule) },
];

export const APP_ROUTE = RouterModule.forRoot(app, { scrollPositionRestoration: 'enabled', preloadingStrategy: QuicklinkStrategy });
