import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'type'
})
export class TypePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let newValue = value.filter(item => item.type === args);
    if (args === 'all') {
      return value;
    }
    return newValue;
  }

}
