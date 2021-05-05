import { Component, OnInit, AfterViewInit } from '@angular/core';

import { map, tap } from 'rxjs/operators';

import { SeoService } from '../../shared/services/seo.service';
import { NewsService } from '../../shared/services/news.service';

@Component({
  selector: 'app-tabloide',
  templateUrl: './tabloide.component.html',
  styleUrls: ['./tabloide.component.scss']
})
export class TabloideComponent implements OnInit, AfterViewInit {

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
        // const url = res[0]['condor'].issuu[0];
        // this.seo.dataLayerTracking({ event: 'clickTabloid', tabloidName: res[0].title });
        // this.show = `<iframe class="embed-responsive-item" src="${this.selectedType(url)}" allowfullscreen ></iframe>`;
        })
    )
  }

  ngAfterViewInit(): void {
    this.items.subscribe((res) => {
      const url = res[0]['condor'].issuu[0];
      this.seo.dataLayerTracking({ event: 'clickTabloid', tabloidName: res[0].title });
      this.show = `<iframe class="embed-responsive-item" src="${this.selectedType(url)}" allowfullscreen ></iframe>`;
    });
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    // 26072615/85053920
  }

  getIssuu = (issu: any, i: number) => {
    this.active = i;
    const url = issu.condor.issuu[0];
    this.seo.dataLayerTracking({ event: 'clickTabloid', tabloidName: issu.title.rendered });
    this.show = `<iframe class="embed-responsive-item" src="${this.selectedType(url)}" allowfullscreen></iframe>`;
  }

  private selectedType = (text: string) => {
    let url: string = '';
    let value = text.indexOf('/');
    if (value > 0) url = `//e.issuu.com/embed.html#${text}`;
    else url = `//e.issuu.com/embed.html?d=${text}&hideIssuuLogo=true&u=redecondor`;
    return url
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
