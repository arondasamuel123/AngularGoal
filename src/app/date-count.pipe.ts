import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any, ...args: any[]): number {
    const today: Date = new Date();
    const todayWithNoTime: any = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const dateDifference = Math.abs(value - todayWithNoTime);
    const secondsInDay = 86400;
    const dateDIfferenceSeconds = dateDifference * 0.001;
    const dateCounter = dateDIfferenceSeconds / secondsInDay;
    if (dateCounter >= 1 && value > todayWithNoTime) {
        return dateCounter;
      } else {
        return 0;
      }
    
  }

}
