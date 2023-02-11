import { ServicioService } from './../servicio.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

export interface budgetData {
  client: string,
  budget: string,
  web:boolean,
  seo: boolean,
  google: boolean,
  price: number
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  budgetForm : FormGroup;
  data: budgetData[]=[];
  webLangPagePrice:number=30;
  isOn:boolean = false;
  webPrice : number = 500;
  seoPrice : number = 300;
  googlePrice : number = 200;
  price:number = 0;
  showBudgetList = false;


  ngOnInit(){ 
    this.servicio.throwBudget.subscribe(dataPrice=>{
      this.webLangPagePrice = dataPrice;
      this.updatePrice()

    });
  }

  constructor(private servicio: ServicioService, private router: Router, private fb: FormBuilder){
    this.budgetForm = this.fb.group({
      client: ['', Validators.required],
      budget : ['', Validators.required],
      web : [false],
      seo:[false],
      google:[false]
    }); 

  }

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

  saveBudget(){
    let values: budgetData = this.budgetForm.value;
    values.price = this.price;
    this.servicio.addBudgetData(values);
    this.showBudgetList = true;
    console.log(values);
  }

}