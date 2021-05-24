import { __decorate, __param } from "tslib";
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
let SeoService = class SeoService {
    constructor(meta, title, router, doc, platformId) {
        this.meta = meta;
        this.title = title;
        this.router = router;
        this.doc = doc;
        this.platformId = platformId;
        this.addTags = (data) => this.meta.addTags([
            { name: 'title', 'content': data.title },
            { name: 'og:title', 'content': data.title },
            { name: 'twitter:title', 'content': data.title },
            { name: 'description', 'content': data.description },
            { name: 'og:description', 'content': data.description },
            { name: 'twitter:description', 'content': data.description },
            { name: 'og:image', 'content': data.image },
            { name: 'twitter:image', 'content': data.image },
            { name: 'og:type', content: 'website' },
            { name: 'twitter:card', content: 'summary_large_image' }
        ]);
        this.updateTags = (data) => {
            const description = data.description;
            const content = description.replace(/(<([^>]+)>)/gi, "");
            let conteudo = content.substr(0, 155);
            conteudo = `${conteudo}`;
            this.setTitle(data.title);
            this.updateTag('og:type', 'website');
            this.updateTag('og:image', data.image);
            this.updateTag('og:title', data.title);
            this.updateTag('description', conteudo);
            this.updateTag('og:description', conteudo);
            this.updateTag('twitter:image', data.image);
            this.updateTag('twitter:title', data.title);
            this.updateTag('twitter:description', conteudo);
            this.updateTag('twitter:card', 'summary_large_image');
        };
        this.updateTag = (name, content) => this.meta.updateTag({ name, content });
        this.updateTagName = (content) => {
            this.meta.updateTag({ name: 'title', content: content });
            this.meta.updateTag({ name: 'og:title', content: content });
            this.meta.updateTag({ name: 'twitter:title', content: content });
        };
        this.addTagDescription = (content) => {
            return this.meta.addTags([
                { name: 'description', content },
                { name: 'og:description', content },
                { name: 'twitter:description', content }
            ]);
        };
        this.updateTagDescription = (content) => {
            this.meta.updateTag({ name: 'description', content: content });
            this.meta.updateTag({ name: 'og:description', content: content });
            this.meta.updateTag({ name: 'twitter:description', content: content });
        };
        this.addCanonical = () => {
            let link = this.doc.createElement('link');
            link.setAttribute('rel', 'canonical');
            this.doc.head.appendChild(link);
            link.setAttribute('href', this.doc.URL);
        };
        this.addTagImage = (content) => {
            return this.meta.addTags([
                { name: 'og:image', content },
                { name: 'twitter:image', content }
            ]);
        };
        this.updateTagImage = (content) => {
            this.meta.updateTag({ name: 'og:image', content: content });
            this.meta.updateTag({ name: 'twitter:image', content: content });
        };
        this.addGeolocation = (cidade, latLng) => {
            let uf;
            if (cidade === 'Curitiba')
                uf = 'BR-PR';
            else
                uf = 'BR-SC';
            return this.meta.addTags([
                { name: 'geo.region', content: uf },
                { name: 'geo.placename', content: cidade },
                { name: 'geo.position', content: latLng },
                { name: 'ICBM', content: latLng }
            ]);
        };
        this.dataLayerPage = (pageTitle) => {
            if (isPlatformBrowser(this.platformId))
                window['dataLayer'].push({ event: 'pageview', pagePath: this.router.url, pageTitle });
            else
                true;
        };
        this.dataLayerBlog = (arr) => {
            if (isPlatformBrowser(this.platformId))
                window['dataLayer'].push(arr);
            else
                true;
        };
        this.dataLayerProduct = (arr) => {
            if (isPlatformBrowser(this.platformId))
                window['dataLayer'].push(arr);
            else
                true;
        };
        this.dataLayerTracking = (arr) => {
            if (isPlatformBrowser(this.platformId))
                window.dataLayer.push(arr);
            else
                true;
        };
        this.meta.addTags([
            { name: 'og:type', content: 'website' },
            { name: 'twitter:card', content: 'summary_large_image' }
        ]);
    }
    setTitle(titulo) {
        return this.title.setTitle(titulo);
    }
    addTagName(content) {
        return this.meta.addTags([
            { name: 'title', content },
            { name: 'og:title', content },
            { name: 'twitter:title', content }
        ]);
    }
};
SeoService = __decorate([
    Injectable({ providedIn: 'root' }),
    __param(3, Inject(DOCUMENT)),
    __param(4, Inject(PLATFORM_ID))
], SeoService);
export { SeoService };
//# sourceMappingURL=seo.service.js.map