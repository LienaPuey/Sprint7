import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(private servicio: ServicioService, private route: ActivatedRoute, private router: Router){
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

  onSaveBudgetURL(budget : budgetData){
    this.servicio.saveBudgetURL(budget, true);
    const params = this.route.snapshot.queryParams['data'];
    console.log(params);
    console.log('este es el budget',budget);
    const budgetObject = JSON.parse(decodeURIComponent(params));
    const budgetDataParams = budgetObject.data;
    console.log('params',params, budgetDataParams);

  }
  viewBudgetDetail(id: number) {
    this.router.navigate(['/presupuesto', id]);
  }

}
