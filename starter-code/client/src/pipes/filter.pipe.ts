import {Pipe, PipeTransform} from '@angular/core';

@Pipe ({
  name: 'filter',
  pure: false
})

export class FilterPipe{
  transform (items: any[], field: string, value: string): any[]{
    if(!items){return []};
    if(!value){return items};
    const pattern = new RegExp(value, 'i');
    return items.filter(el=>el[field].match(pattern));
  }
}