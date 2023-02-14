import { Subject } from 'rxjs';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { budgetData } from '../app/home/home.component';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';


@Injectable({
  providedIn: 'root'
})
export class ServicioService {
throwBudget: Subject<number>= new Subject();
budgetDataList : budgetData [] = [];  
constructor(private router: Router) { }

addBudgetData(data: budgetData) {
  const newId = uuidv4();
  data.id=newId;
  this.budgetDataList.push(data);
  console.log('listado',this.budgetDataList);
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

resetByDate(){
  this.budgetDataList.sort((a,b)=>{
    return a.date.getTime() - b.date.getTime();
  })
}



getPresupuestoPorId(id:string) {
  return this.budgetDataList.find(presupuesto => presupuesto.id === id);
  
}
}


