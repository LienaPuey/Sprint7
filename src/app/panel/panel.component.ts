import { Component } from '@angular/core';
import { ServicioService } from '../servicio.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent {
constructor(
  private servicio:ServicioService,
  private fb: FormBuilder
  ){
    
}

formPanel:FormGroup=new FormGroup({
  pages: new FormControl(1,[
    Validators.pattern(/^[0-9]*$/),
    Validators.min(1)
  ]),
  languages: new FormControl(1,[
    Validators.pattern(/^[0-9]*$/),
    Validators.min(1)
  ])
});
get pagesValue(){
  return this.formPanel.get('pages')?.value;
}
get languagesValue(){
  return this.formPanel.get('languages')?.value;
}
updatePrice(){
  let webPrice:number = this.pagesValue * this.languagesValue * 30;
   console.log(webPrice);
   this.servicio.throwBudget.next(webPrice);
 }
increasePage(){
 let value= this.formPanel.patchValue({ pages: this.pagesValue + 1 });
 this.updatePrice();
}
decreasePage(){
  if (this.pagesValue > 1) {
    let value = this.formPanel.patchValue({ pages: this.pagesValue - 1 });
    this.updatePrice();
}

}
increaseLanguage(){
  let value = this.formPanel.patchValue({ languages: this.languagesValue + 1 });
  this.updatePrice()
}
decreaseLanguage(){
  if (this.languagesValue > 1) {
    let value = this.formPanel.patchValue({ languages: this.languagesValue - 1 });
    this.updatePrice();
}

}


}
