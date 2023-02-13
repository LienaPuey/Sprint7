import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { budgetData } from 'app/home/home.component';
import { ServicioService } from 'app/servicio.service';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.scss']
})

export class BudgetListComponent implements OnInit {
  ngOnInit(): void {
  }
  budgetDataList : budgetData[];
  budgetReset: budgetData[];
  filterBudget='';
  constructor(private servicio: ServicioService){
    this.budgetDataList = this.servicio.getBudgetData();
    this.budgetReset = this.budgetDataList;
    console.log(this.budgetDataList);
  }

  filterByDate(){
    this.servicio.sortByDate();
  }

  filterByName(){
    this.servicio.sortByName();
  }

  resetOrder(){
    this.servicio.resetByDate();
  }

  // searchFilter(event:any){
  //   this.filterBudget = event.target.value;
  // }
}
