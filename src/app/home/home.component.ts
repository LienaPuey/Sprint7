import { ServicioService } from './../servicio.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  ngOnInit(){ 
    this.servicio.throwBudget.subscribe(dataPrice=>{
      this.webLangPagePrice = dataPrice;
      this.updatePrice()

    });
  }
  constructor(private servicio: ServicioService, private router: Router){

  }
  budgetForm = new FormGroup({
    web : new FormControl(false),
    seo: new FormControl(false),
    google: new FormControl(false)
  }); 
  webLangPagePrice:number=30;
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

  updatePrice(){
    this.price = this.webValue + this.seoValue + this.googleValue;
    if(this.webValue){
      this.price = this.webValue + this.webLangPagePrice + this.seoValue + this.googleValue;
    }
    console.log(this.price);
    
  }

  goBack():void {
    this.router.navigate(['/welcome']);
  }


}