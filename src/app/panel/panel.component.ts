import { Component } from '@angular/core';
import { ServicioService } from '../servicio.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent {
constructor(private servicio:ServicioService){

}

formPanel:FormGroup=new FormGroup({
  pages: new FormControl('',[
    Validators.pattern(/^[0-9]*$/),
    Validators.min(1)
  ]),
  languages: new FormControl('',[
    Validators.pattern(/^[0-9]*$/),
    Validators.min(1)
  ])
});
pagesValue:number = this.formPanel.get('pages')?.value;
languagesValue:number = this.formPanel.get('languages')?.value;
incrementPages(){
  this.pagesValue++;
}
decrementPages(){
  this.pagesValue--;
}


webPriceTotal:number = this.pagesValue * this.languagesValue * 30;




}
