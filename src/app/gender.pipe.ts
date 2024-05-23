import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(empName: any,gender:any): any {
   if(gender=='Male'){
    return 'Mr.'+empName;
   }else if(gender=='Female'){
    return 'Miss.'+empName;
   }
    return empName;
  }

}
