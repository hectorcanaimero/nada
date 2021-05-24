import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
let LojasComponent = class LojasComponent {
    constructor(router, seo, news) {
        this.router = router;
        this.seo = seo;
        this.news = news;
        this.p = 1;
        this.setSeo = () => {
            this.seo.updateTags({
                title: `Supermercado Condor mais Próximo | Telefones e Endereços | Condor.com.br`,
                description: 'Encontre o Supermercado Condor Mais Próximo de Você! Confira Endereços, Telefones e Rotas de todas as Lojas Condor da sua Cidade.',
                image: 'https://www.condor.com.br/assets/images/sem-imagem.jpg'
            });
            this.seo.dataLayerPage('Lojas');
            this.seo.addCanonical();
        };
        this.onLoja = (ev) => {
            const value = ev.target.value;
            if (value === 'All')
                this.items$ = this.news.Lojas(100).pipe(debounceTime(1000));
            else
                this.items$ = this.news.LojaPorRegion(value);
        };
        this.goToLoja = (ev) => {
            const value = ev.target.value;
            if (value !== 'All')
                this.router.navigate(['lojas', value]);
        };
    }
    ngOnInit() {
        this.setSeo();
        this.items$ = this.news.Lojas(100).pipe(debounceTime(1000));
        this.region$ = this.news.LojaRegion();
    }
};
LojasComponent = __decorate([
    Component({
        selector: 'app-lojas',
        templateUrl: './lojas.component.html',
        styleUrls: ['./lojas.component.scss']
    })
], LojasComponent);
export { LojasComponent };
//# sourceMappingURL=lojas.component.js.map