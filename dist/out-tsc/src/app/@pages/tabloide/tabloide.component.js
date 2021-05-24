import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { tap, delay } from 'rxjs/operators';
let TabloideComponent = class TabloideComponent {
    constructor(news, seo) {
        this.news = news;
        this.seo = seo;
        this.active = [];
        this.items = [];
        this.getIssuu = (issu, i) => {
            this.active = i;
            const url = issu.condor.issuu[0];
            this.seo.dataLayerTracking({ event: 'clickTabloid', tabloidName: issu.title.rendered });
            this.show = `<iframe class="embed-responsive-item" src="${this.selectedType(url)}" allowfullscreen></iframe>`;
        };
        this.selectedType = (text) => {
            let url = '';
            let value = text.indexOf('/');
            if (value > 0)
                url = `//e.issuu.com/embed.html#${text}`;
            else
                url = `//e.issuu.com/embed.html?d=${text}&hideIssuuLogo=true&u=redecondor`;
            return url;
        };
        this.getSeo = () => {
            this.seo.dataLayerPage('Tabloide online');
            this.seo.updateTags({
                title: 'Confira o Tabloide Online Condor | Condor.com.br',
                description: 'Acesse o Tabloide Online Condor e Confira as Melhores Ofertas do Dia e da Semana do Supermercado Condor mais Próximo de Você!',
                image: 'https://www.condor.com.br/assets/images/sem-imagem.jpg'
            });
            this.seo.addCanonical();
        };
    }
    ngOnInit() {
        this.getSeo();
        this.items = this.news.Tabloides(100).pipe(tap((res) => {
            this.seo.dataLayerTracking({ event: 'clickTabloid', tabloidName: res[0].title });
            this.show = `<iframe class="embed-responsive-item" src="//e.issuu.com/embed.html#${res[0]['condor'].issuu[0]}" allowfullscreen ></iframe>`;
        }), delay(1000));
    }
    ngAfterViewInit() {
        this.items.subscribe((res) => {
            const url = res[0]['condor'].issuu[0];
            this.seo.dataLayerTracking({ event: 'clickTabloid', tabloidName: res[0].title });
            this.show = `<iframe class="embed-responsive-item" src="${this.selectedType(url)}" allowfullscreen ></iframe>`;
        });
    }
};
TabloideComponent = __decorate([
    Component({
        selector: 'app-tabloide',
        templateUrl: './tabloide.component.html',
        styleUrls: ['./tabloide.component.scss']
    })
], TabloideComponent);
export { TabloideComponent };
//# sourceMappingURL=tabloide.component.js.map