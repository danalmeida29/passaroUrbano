import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Oferta } from '../shared/oferta/oferta.model'
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

const BASE_URL = environment.BASE_URL_API

@Injectable({
  providedIn: 'root'
})
export class OfertasService {

  constructor(private http: HttpClient) { }

  public getOfertas(): Observable<Oferta[]>{
   return this.http.get<Oferta[]>(`${BASE_URL}`)
   .pipe(map((resposta: any) => resposta));
  }

  public getOffersCategory(categoria:string){
    return this.http.get(`${BASE_URL}?categoria=${categoria}`)
    .pipe(map((resposta: any) => resposta));
  }

  public getOfertaId(Id: number){
    return this.http.get(`${BASE_URL}?id=${Id}`)
    .pipe(map((resposta: any) => resposta.shift()));
  }
}
