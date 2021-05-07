import { Directive, AfterViewInit, HostBinding, Input, ElementRef } from '@angular/core';

@Directive({
  selector: 'img[appProduct]'
})
export class ProductDirective implements AfterViewInit {

  @Input() src: string;
  @HostBinding('attr.src') srcAttr = null;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.canLazyLoad() ? this.lazyLoadImage() : this.loadImage();
  }

  private canLazyLoad() {
    return window && 'IntersectionObserver' in window;
  }

  private lazyLoadImage() {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(({ isIntersecting }) => {
        if (isIntersecting) {
          this.loadImage();
          obs.unobserve(this.el.nativeElement);
        }
      });
    });
    obs.observe(this.el.nativeElement);
  }

  private loadImage() {
    console.log(this.src);
    this.srcAttr = `https://marketing.condor.com.br/api/Containers/produtos/download/${this.src}.jpg`;
  }

}
