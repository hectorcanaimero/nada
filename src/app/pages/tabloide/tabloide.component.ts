import { Component, OnInit } from '@angular/core';

import { tap } from 'rxjs/operators';

import { SeoService } from '../../shared/services/seo.service';
import { NewsService } from '../../shared/services/news.service';

@Component({
  selector: 'app-tabloide',
  templateUrl: './tabloide.component.html',
  styleUrls: ['./tabloide.component.scss']
})
export class TabloideComponent implements OnInit {

  show: string;
  active: any = [];
  items: any = [];

  constructor(
    private news: NewsService,
    private seo: SeoService
  ) { }

  ngOnInit(): void {
    this.getSeo();
    this.items = this.news.Tabloides(100).pipe(
      tap((res) => {
        this.seo.dataLayerTracking({ event: 'clickTabloid', tabloidName: res[0].title });
        this.show = `<iframe class="embed-responsive-item" src="//e.issuu.com/embed.html#${res[0]['condor'].issuu[0]}" allowfullscreen ></iframe>`;
      })
    )
  }

  getIssuu = (issu: any, i: number) => {
    this.active = i;
    this.seo.dataLayerTracking({ event: 'clickTabloid', tabloidName: issu.title.rendered });
    this.show = `<iframe class="embed-responsive-item" src="//e.issuu.com/embed.html#${issu.condor.issuu}" allowfullscreen></iframe>`;
  }

  getSeo = () => {
    this.seo.dataLayerPage('Tabloide online');
    this.seo.updateTags({
      title: 'Confira o Tabloide Online Condor | Condor.com.br',
      description: 'Acesse o Tabloide Online Condor e Confira as Melhores Ofertas do Dia e da Semana do Supermercado Condor mais Próximo de Você!',
      image: 'https://www.condor.com.br/assets/images/sem-imagem.jpg'
    });
    this.seo.addCanonical();
  }
}
