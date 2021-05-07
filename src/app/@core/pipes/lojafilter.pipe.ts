import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'lojafilter'
})
export class LojafilterPipe implements PipeTransform {

    transform(items: any[], search: number): any {
        if (!items) { return []; }
        if (!search) { return items; }
        return items.filter(item => {
            if (item && item['ofertas']['loja']) {
                return item['ofertas']['loja'] === search;
            }
            return false;
        });
    }
}
