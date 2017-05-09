import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the ReversePipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'reverse',
})
export class ReversePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      return value.slice().reverse()
    }
    return null;
  }
}
