import { Subject } from 'rxjs';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { budgetData } from '../app/home/home.component';
@Injectable({
  providedIn: 'root'
})
export class ServicioService {
throwBudget: Subject<number>= new Subject();
budgetDataList : budgetData [] = [];  
constructor() { }

addBudgetData(data: budgetData) {
  this.budgetDataList.push(data);
  console.log(this.budgetDataList);
}

getBudgetData() {
  return this.budgetDataList;
}


sortByDate(){
  this.budgetDataList.sort((a,b) =>{
    return b.date.getTime() - a.date.getTime();
  })
}

sortByName(){
  this.budgetDataList = this.budgetDataList.sort((a,b) =>{
    let nameA = a.client.toLocaleLowerCase();
    let nameB= b.client.toLocaleLowerCase();
    if(nameA < nameB){
      return -1;
    }
    if (nameA > nameB){
      return 1;
    }
    return 0;
  })
}

}


