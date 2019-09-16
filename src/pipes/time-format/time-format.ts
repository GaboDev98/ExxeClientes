// Default components
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormat',
})
export class TimeFormatPipe implements PipeTransform {

  timeArray: string[];
  
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    this.timeArray = value.split(' ')[1].split(':');
    return this.timeArray[0] + ':' + this.timeArray[1];
  }
}
