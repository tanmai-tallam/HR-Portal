import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exp'
})
export class ExpPipe implements PipeTransform {

  joinYear: any;
  currentYear: any;
  exprience: any;

  transform(value: any): any {
    
    this.currentYear = new Date().getFullYear();
    this.joinYear = new Date(value).getFullYear();
    this.exprience = this.currentYear - this.joinYear;

    return this.exprience;
  }

}
