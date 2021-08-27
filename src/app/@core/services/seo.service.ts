import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Injectable(
  {providedIn: 'root' }
)

export class SeoService {
  constructor(
    private meta: Meta,
    private title: Title,
    private router: Router,
    @Inject(DOCUMENT) private doc,
    @Inject(PLATFORM_ID) private platformId,
  ) {
    this.meta.addTags([
      { name: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' }
    ]);
  }


  addTags = (data: Seo) => this.meta.addTags([
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

  updateTags = (data: Seo) => {
    const description = data.description;
    const content = description.replace(/(<([^>]+)>)/gi, "");
    let conteudo = content.substr(0, 255);
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
  }

  private updateTag = (name: string, content: string) => this.meta.updateTag({ name, content });

  setTitle(titulo: string) {
    return this.title.setTitle(titulo);
  }

  addTagName(content: string) {
    return this.meta.addTags([
      { name: 'title', content },
      { name: 'og:title', content },
      { name: 'twitter:title', content }
    ]);
  }


  updateTagName = (content: string) => {
    this.meta.updateTag({ name: 'title', content: content} );
    this.meta.updateTag({ name: 'og:title', content: content} );
    this.meta.updateTag({ name: 'twitter:title', content: content} );
  }

  addTagDescription = (content: string) => {
    return this.meta.addTags([
      { name: 'description', content },
      { name: 'og:description', content },
      { name: 'twitter:description', content }
    ]);
  }

  updateTagDescription = (content: string) => {
    this.meta.updateTag({ name: 'description', content: content} );
    this.meta.updateTag({ name: 'og:description', content: content} );
    this.meta.updateTag({ name: 'twitter:description', content: content} );
  }


  addCanonical = () => {
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'canonical');
    this.doc.head.appendChild(link);
    link.setAttribute('href', this.doc.URL);
  }


  addTagImage = (content: string) => {
    return this.meta.addTags([
      { name: 'og:image', content },
      { name: 'twitter:image', content }
    ]);
  }

  updateTagImage = (content: string) => {
    this.meta.updateTag({ name: 'og:image', content: content} );
    this.meta.updateTag({ name: 'twitter:image', content: content} );
  }

  addGeolocation = (cidade: string, latLng: string) => {
    let uf: any;
    if (cidade === 'Curitiba') uf = 'BR-PR';
    else uf = 'BR-SC';
    return this.meta.addTags([
      { name: 'geo.region', content: uf },
      { name: 'geo.placename', content: cidade },
      { name: 'geo.position', content: latLng },
      { name: 'ICBM', content: latLng }
    ]);
  }

  dataLayerPage = (pageTitle?: string) => {
    if (isPlatformBrowser(this.platformId)) window['dataLayer'].push({ event: 'pageview', pagePath: this.router.url, pageTitle });
    else true;
  }


  dataLayerBlog = (arr: any) => {
    if (isPlatformBrowser(this.platformId)) window['dataLayer'].push(arr);
    else true;
  }

  dataLayerProduct = (arr: any) => {
    if (isPlatformBrowser(this.platformId)) window['dataLayer'].push(arr);
    else true;
  }

  dataLayerTracking = (arr: any) => {
    if (isPlatformBrowser(this.platformId)) (<any>window).dataLayer.push(arr);
    else true;
  }
}


export interface Seo {
  title: string;
  description: string;
  image: string;
}
