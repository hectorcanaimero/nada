import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { slideDownInOut, slideLeftInOut } from '@core/animations/slide';
let MobileComponent = class MobileComponent {
    constructor(router, seo, db, news, util) {
        this.router = router;
        this.seo = seo;
        this.db = db;
        this.news = news;
        this.util = util;
        this.salida = new EventEmitter();
        this.activeSidebar = 'out';
        this.activeMenuOfertas = 'out';
        this.items = [];
        this.condor = [];
        this.faleConosco = [];
        this.toogleSidebar = () => this.activeSidebar = this.activeSidebar === 'out' ? 'in' : 'out';
        this.toogleMenuOfertas = () => this.activeMenuOfertas = this.activeMenuOfertas === 'out' ? 'in' : 'out';
        this.convertFaleConosco = () => {
            this.condor.sac.forEach(el => this.faleConosco.push(el));
            this.condor.trabalhe.forEach(el => this.faleConosco.push(el));
            this.condor.denuncia.forEach(el => this.faleConosco.push(el));
            this.faleConosco.push({ nome: 'Notícias', url: '/institucional/imprensa' });
        };
        this.onLink = (slug) => {
            this.router.navigateByUrl(slug);
            this.activeSidebar = 'out';
        };
        this.onToogle = (ev) => {
            console.log(ev);
        };
        this.getSearch = (event) => {
            if (event.keyCode === 13) {
                if (!event.target.value)
                    return;
                return this.router.navigate(['pesquisa-usuario', this.util.toSlug(event.target.value)]);
            }
        };
        this.getSearchClick = () => {
            if (!this.search.nativeElement.value)
                return;
            return this.router.navigate(['pesquisa-usuario', this.util.toSlug(this.search.nativeElement.value)]);
        };
        this.getCategory = () => this.category = this.news.getBlogCollection('categories?orderby=count&order=desc&per_page=10')
            .pipe(map(res => res.body));
        this.goToCategory = (e) => this.router.navigate(['/blog', 'categoria', e.target.value]);
        this.goToDepartamento = (e) => this.router.navigate(['/departamento', e.target.value]);
        // toog = (ev) => this.entrada = false;
        this.Click = (event) => {
            if (event.keyCode === 13) {
                if (!event.target.value)
                    return;
                this.seo.dataLayerTracking({ event: 'blogsearch', searchTerm: event.target.value });
                return this.router.navigate(['blog', 'search', this.util.toSlug(event.target.value)]);
            }
        };
    }
    ngOnInit() {
        this.getCategory();
        this.convertFaleConosco();
        this.menuOfertas$ = this.db.getMenuOfertas('menuDepartamento');
    }
};
__decorate([
    ViewChild('search')
], MobileComponent.prototype, "search", void 0);
__decorate([
    Output()
], MobileComponent.prototype, "salida", void 0);
__decorate([
    Input()
], MobileComponent.prototype, "activeSidebar", void 0);
__decorate([
    Input()
], MobileComponent.prototype, "items", void 0);
__decorate([
    Input()
], MobileComponent.prototype, "condor", void 0);
MobileComponent = __decorate([
    Component({
        selector: 'app-mobile',
        templateUrl: './mobile.component.html',
        styleUrls: ['./mobile.component.scss'],
        animations: [slideDownInOut, slideLeftInOut]
    })
], MobileComponent);
export { MobileComponent };
//# sourceMappingURL=mobile.component.js.map