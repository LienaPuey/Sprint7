import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...args: any): any {
    const resultBudget = [];

    for(let result of value ){
      if(result.budget.toLocaleLowerCase().indexOf(args.toLocaleLowerCase()) > -1){
        resultBudget.push(result);
      }
    }
    return resultBudget;
  }

}
