import { ServicioService } from './../servicio.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  ngOnInit(){ 
    this.servicio.throwBudget.subscribe(dataPrice=>{
      this.webLangPagePrice = dataPrice;
    });
  }
  constructor(private servicio: ServicioService){

  }
  budgetForm = new FormGroup({
    web : new FormControl(false),
    seo: new FormControl(false),
    google: new FormControl(false)
  }); 
  webLangPagePrice:number=0;
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
    if(this.webValue){
      this.price = this.webValue + this.webLangPagePrice + this.seoValue + this.googleValue;
    }
    console.log(this.price);
    
  }


}