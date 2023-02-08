import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private servicio: ServicioService){

  }
  budgetForm = new FormGroup({
    web : new FormControl(false),
    seo: new FormControl(false),
    google: new FormControl(false)
  }); 

  isOn:boolean = false;
  webPrice : number = 500;
  seoPrice : number = 300;
  googlePrice : number = 200;
  price:number = 0;

  get webValue(){
    return this.budgetForm.get('web')?.value ? this.webPrice : 0;
  }

  get seoValue(){
    return this.budgetForm.get('seo')?.value ? this.seoPrice : 0; 
  }

  get googleValue(){
    return this.budgetForm.get('google')?.value ? this.googlePrice : 0;
  }

  updatePrice(checkbox: string){
    this.price = this.webValue + this.seoValue + this.googleValue;
  }


}