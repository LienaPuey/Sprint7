import { Subject } from 'rxjs';
import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
throwBudget: Subject<number>= new Subject();
  constructor() { }



}
