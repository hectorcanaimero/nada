import { SeoService } from 'src/app/shared/services/seo.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { NewsService } from 'src/app/shared/services/news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lojas',
  templateUrl: './lojas.component.html',
  styleUrls: ['./lojas.component.scss']
})
export class LojasComponent implements OnInit, OnDestroy {

  p = 1;

  items: Observable<any>;
  region: any = [];

  private lojaSubs: Subscription;
  private lojaRegionSubs: Subscription;
  private lojaXRegionSubs: Subscription;


  constructor(
    private router: Router,
    private seo: SeoService,
    private news: NewsService,
    ) { }

  ngOnInit() {
    this.getSeo();
    this.onInit();
  }

  ngOnDestroy(): void {
    if (this.lojaRegionSubs) { this.lojaRegionSubs.unsubscribe(); }
  }


  onInit = () => {
    this.getRegion();
    this.items = this.news.Lojas(100);
  }

  getSeo = () => {
    this.seo.updateTags({
      title: `Supermercado Condor mais Próximo | Telefones e Endereços | Condor.com.br`,
      description: 'Encontre o Supermercado Condor Mais Próximo de Você! Confira Endereços, Telefones e Rotas de todas as Lojas Condor da sua Cidade.',
      image: 'https://www.condor.com.br/assets/images/sem-imagem.jpg'
    });
    this.seo.dataLayerPage('Lojas');
    this.seo.addCanonical();
  }

  getRegion = () => {
    this.lojaRegionSubs = this.news.LojaRegion().subscribe(data => (this.region = data));
  }

  onLoja = (e: any) => {
    if (e.target.value === 'All') this.items = this.news.Lojas(100);
    else this.items = this.news.LojaPorRegion(e.target.value);
  }

  goToLoja = (e: any) => { if (e.target.value !== 'All') this.router.navigate(['lojas', e.target.value]) }

}
