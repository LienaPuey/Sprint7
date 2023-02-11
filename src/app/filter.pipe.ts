import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    console.log(value, arg, 'holahola');
    const resultBudget = [];

    for(let result of value ){
      if(result.budget.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultBudget.push(result);
      }
    }
    console.log('hola', resultBudget);
    return resultBudget;
  }

}
