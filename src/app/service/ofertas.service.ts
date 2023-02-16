import { Injectable } from '@angular/core';
import { Oferta } from '../shared/oferta/oferta.model'
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OfertasService {

  constructor(private http: HttpClient) { }

  public getOfertas(): Observable<Oferta[]>{
   return this.http.get<Oferta[]>('http://localhost:3000/ofertas')
   .pipe(map((resposta: any) => resposta));
  }

}
