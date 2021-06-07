import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(items: any[], searchText: string, fieldName: string): any {
    if (!items) { return []; }
    if (!searchText) { return items; }
    searchText = `${searchText}`.toLowerCase();
    return items.filter(item => {
      if (item && item['produtos'][fieldName]) {
        return `${item['produtos'][fieldName]}`.toLowerCase().includes(searchText);
      }
      return false;
    });
  }

}
