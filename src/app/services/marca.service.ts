import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { carModel } from '../views/pages/landing/landing.component';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  constructor(
    private http: HttpClient
  ) { }

  getModels(): Observable<carModel[]>{
    return of([
      {model: 'AUDI', description: 'Esta es una descripcion del modelo AUDI'},
      {model: 'BMW', description: 'Esta es una descripcion del modelo BMW'},
      {model: 'CITROEN', description: 'Esta es una descripcion del modelo CITROEN'},
      {model: 'FIAT', description: 'Esta es una descripcion del modelo FIAT'},
      {model: 'HONDA', description: 'Esta es una descripcion del modelo HONDA'},
      {model: 'MERCEDES-BENZ', description: 'Esta es una descripcion del modelo MERCEDES-BENZ'},
      {model: 'OPEL', description: 'Esta es una descripcion del modelo OPEL'},
      {model: 'RENAULT', description: 'Esta es una descripcion del modelo RENAULT'},
      {model: 'SEAT', description: 'Esta es una descripcion del modelo SEAT'},
      {model: 'TOYOTA', description: 'Esta es una descripcion del modelo TOYOTA'},
      {model: 'VOLKSWAGEN', description: 'Esta es una descripcion del modelo VOLKSWAGEN'},
      {model: 'VOLVO', description: 'Esta es una descripcion del modelo VOLVO'},
    ]);
    // return this.http.get<carModel[]>('http://localhost:3000/modelos');
  }
}
