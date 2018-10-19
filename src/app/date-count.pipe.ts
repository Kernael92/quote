import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
     let today: Date = new Date()
     let todayWithTime: any = new Date(today.getFullYear(), today.getMonth(),today.getDate(), today.getHours(), today.getMinutes(), today.getSeconds()); //get current date and time
     let dateDifference = Math.abs(todayWithTime - value); //returns today in milliseconds
     const secondsInADay = 86400;
     var dateDifferenceSeconds = dateDifferenceSeconds*0.001;
     var dateCounter = dateDifferenceSeconds/secondsInADay;

     if (dateCounter >= 1 && todayWithTime > value){
        return dateCounter;
     }else{
        return 0;
     }

  }

}
