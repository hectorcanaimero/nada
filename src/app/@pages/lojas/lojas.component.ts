import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { SeoService } from '@core/services/seo.service';
import { NewsService } from '@core/services/news.service';
import { delay, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-lojas',
  templateUrl: './lojas.component.html',
  styleUrls: ['./lojas.component.scss']
})
export class LojasComponent implements OnInit {

  p = 1;
  items$: Observable<any>;
  region$: Observable<any[]>;

  constructor(
    private router: Router,
    private seo: SeoService,
    private news: NewsService,
    ) { }

  ngOnInit() {
    this.setSeo();
    this.items$ = this.news.Lojas(100).pipe(debounceTime(1000));
    this.region$ = this.news.LojaRegion();
  }

  setSeo = () => {
    this.seo.updateTags({
      title: `Supermercado Condor mais Próximo | Telefones e Endereços | Condor.com.br`,
      description: 'Encontre o Supermercado Condor Mais Próximo de Você! Confira Endereços, Telefones e Rotas de todas as Lojas Condor da sua Cidade.',
      image: 'https://www.condor.com.br/assets/images/sem-imagem.jpg'
    });
    this.seo.dataLayerPage('Lojas');
    this.seo.addCanonical();
  }

  onLoja = (ev: any) => {
    const value = ev.target.value;
    if (value === 'All') this.items$ = this.news.Lojas(100).pipe(debounceTime(1000));
    else this.items$ = this.news.LojaPorRegion(value);
  }

  goToLoja = (ev: any) => {
    const value = ev.target.value;
    if (value !== 'All') this.router.navigate(['lojas', value])
  }

}
