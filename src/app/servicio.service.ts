import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
@Output() throwBudget: EventEmitter<any>= new EventEmitter();
  constructor() {}



}
