import { Component } from '@angular/core';
import { budgetData } from 'app/home/home.component';
import { ServicioService } from 'app/servicio.service';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.scss']
})

export class BudgetListComponent {
  budgetDataList : budgetData[];
  constructor(private servicio: ServicioService){
    this.budgetDataList = this.servicio.getBudgetData();
    console.log('Este es el list', this.budgetDataList);
  }

  showList(){
    
  }
}
