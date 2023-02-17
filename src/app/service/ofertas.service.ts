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
   return this.http.get<Oferta[]>(`${BASE_URL}/ofertas?destaque=true`)
   .pipe(map((resposta: any) => resposta));
  }

  public getOffersCategory(categoria:string){
    return this.http.get(`${BASE_URL}/ofertas?categoria=${categoria}`)
    .pipe(map((resposta: any) => resposta));
  }

  public getOfertaId(id: number){
    return this.http.get(`${BASE_URL}/ofertas?id=${id}`)
    .pipe(map((resposta: any) => resposta.shift()));
  }

  public getComoUsar(id: number): Observable<string> {
    const url = `${BASE_URL}/como-usar?id=${id}`;
    return this.http.get<any[]>(url).pipe(
      map((resposta: any[]) => {
        const descricao = resposta[0]?.descricao;
        if (!descricao) {
          throw new Error(`Não foi encontrada descrição de como usar para o id ${id}`);
        }
        return descricao;
      })
    );
  }

  public getOndeFica(id: number): Observable<string> {
    const url = `${BASE_URL}/onde-fica?id=${id}`;
    return this.http.get<any[]>(url).pipe(
      map((resposta: any[]) => {
        const descricao = resposta[0]?.descricao;
        if (!descricao) {
          throw new Error(`Não foi encontrada descrição de onde fica para o id ${id}`);
        }
        return descricao;
      })
    );
  }
}
