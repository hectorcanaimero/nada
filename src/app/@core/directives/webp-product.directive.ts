import { Directive, AfterViewInit, HostBinding, Input, ElementRef } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Directive({
  selector: 'source[webpProduct]'
})
export class WebpProductDirective implements AfterViewInit {

  @Input() src: string;
  @HostBinding('attr.srcset') srcAttr = null;

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
    const image = `${ environment.v1.url }/Containers/webp/download/${this.src}.webp`;
    this.srcAttr = image;

  }

}
