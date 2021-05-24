import { __decorate } from "tslib";
import { Component, } from '@angular/core';
import { delay } from 'rxjs/operators';
let BlogComponent = class BlogComponent {
    constructor(seo, db) {
        this.seo = seo;
        this.db = db;
        this.getSeo = () => {
            this.seo.addCanonical();
            this.seo.updateTags({
                title: 'Blog Condor | Receitas, Dicas de Economia e Muito Mais',
                description: 'Confira no Blog Condor: Receitas para seu Dia a Dia, Dicas de Economia, Limpeza, Decoração e Mais',
                image: 'https://www.condor.com.br/assets/images/sem-imagem.jpg'
            });
            this.seo.dataLayerPage('Blog');
        };
    }
    ngOnInit() {
        this.getSeo();
        this.items$ = this.db.getPosts(1, 6).pipe(delay(1000));
    }
};
BlogComponent = __decorate([
    Component({
        selector: 'app-blog',
        templateUrl: './blog.component.html',
        styleUrls: ['./blog.component.scss']
    })
], BlogComponent);
export { BlogComponent };
//# sourceMappingURL=blog.component.js.map