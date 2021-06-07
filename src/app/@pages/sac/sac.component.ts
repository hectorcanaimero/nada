import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Subscription, timer } from 'rxjs';

import { NewsService } from '@core/services/news.service';
import { SeoService } from '@core/services/seo.service';
import { UtilService } from '@core/services/util.service';
import { DataService } from '@core/services/data.service';

@Component({
  selector: 'app-sac',
  templateUrl: './sac.component.html',
  styleUrls: ['./sac.component.scss'],
})
export class SacComponent implements OnInit, OnDestroy {
  fmSac: FormGroup;
  region: any = [];
  allLojas: any = [];

  private cepSubs: Subscription;
  private lojaSubs: Subscription;
  private regionSubs: Subscription;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private db: DataService,
    private seo: SeoService,
    private util: UtilService,
    private news: NewsService,
  ) {}

  ngOnInit() {
    this.buildForm();
    this.getRegion();
    this.seo.dataLayerPage('SAC');
  }

  ngOnDestroy() {
    if (this.cepSubs) this.cepSubs.unsubscribe();
    if (this.lojaSubs) this.lojaSubs.unsubscribe();
    if (this.regionSubs) this.regionSubs.unsubscribe();
  }

  buildForm() {
    this.fmSac = this.fb.group({
      assunto: ['', Validators.required],
      cidade: ['', Validators.required],
      loja: ['', Validators.required],
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required],
      cpf: ['', Validators.required],
      data_nascimento: ['', Validators.required],
      mensagem: ['', Validators.required],
      cep: [''],
      complemento: [''],
      bairro: ['', Validators.required],
      rua: ['', Validators.required],
      uf: [''],
      cid: ['', Validators.required],
    });
  }

  onSubmit = () => {
    const a = this.region.filter((item) => item.id === this.fmSac.value.cidade);
    this.db.add('Sacs', this.fmSac.value).subscribe(() => this.fmSac.reset());
    this.util.sweetalert( 'Sua mensagem foi enviada.', 'Aguarde que em breve entraremos em contato.', 'success', 'center' );
    this.seo.dataLayerTracking({ event: 'formSubmitted', formName: 'SAC', sacStore: this.fmSac.value.loja, });
    timer(1000).subscribe(() => this.router.navigate(['']));
  }

  onCEP = (cep: any) => {
    const value = cep.target.value;
    this.cepSubs = this.util.toCEP(value).subscribe((data) => {
      this.fmSac.patchValue({ rua: data['logradouro'], bairro: data['bairro'], uf: data['uf'], cid: data['localidade'] });
    });
  }

  getLojas = (event: any) => this.lojaSubs = this.news.LojaPorRegion(event.target.value).subscribe((data) => (this.allLojas = data));

  getRegion = () => this.regionSubs = this.news.LojaRegion().subscribe((data) => (this.region = data));

  setSeo = () => {
    this.seo.setTitle('Atendimento ao cliente');
    this.seo.addTagName('Atendimento ao cliente');
    this.seo.addCanonical();
  }
  trackBy = (index: number, item: any) => item[index];

}
