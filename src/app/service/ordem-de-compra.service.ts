import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Pedido } from '../shared/model/pedido.model'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const BASE_URL = environment.BASE_URL_API
@Injectable({
  providedIn: 'root'
})
export class OrdemDeCompraService {

  constructor(private http: HttpClient) { }

  efetivarCompra(pedido: Pedido): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(`${BASE_URL}/pedidos`, JSON.stringify(pedido), { headers })
      .pipe(map((resposta: any) => resposta.id));
  }
}
