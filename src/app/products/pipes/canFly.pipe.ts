import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly',
})
export class CanFly implements PipeTransform {
  transform(value: boolean): string {
    if (value === true) return 'Puede volar';
    return 'No puede volar';
  }
}
