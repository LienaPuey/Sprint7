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
  console.log(data);
}

getBudgetData() {
  return this.budgetDataList;
}

}
