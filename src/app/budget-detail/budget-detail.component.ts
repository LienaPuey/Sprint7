import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { budgetData } from 'app/home/home.component';
import { ServicioService } from 'app/servicio.service';
@Component({
  selector: 'app-budget-detail',
  templateUrl: './budget-detail.component.html',
  styleUrls: ['./budget-detail.component.scss']
})
export class BudgetDetailComponent implements OnInit {
  presupuestoActual:any;
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      const budget = this.servicio.getPresupuestoPorId(id);
      console.log(budget);
      this.presupuestoActual = budget;

    });
  }

  constructor(private servicio: ServicioService, private route: ActivatedRoute, private router: Router){}

}
