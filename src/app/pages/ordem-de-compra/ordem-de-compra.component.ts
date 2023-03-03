import { Component, OnInit } from '@angular/core';
import { OrdemDeCompraService } from 'src/app/service/ordem-de-compra.service';
import { Pedido } from '../../shared/model/pedido.model'

@Component({
  selector: 'app-ordem-de-compra',
  templateUrl: './ordem-de-compra.component.html',
  styleUrls: ['./ordem-de-compra.component.scss']
})
export class OrdemDeCompraComponent implements OnInit {

  constructor(private ordemDeCompraService: OrdemDeCompraService ) { }

  ngOnInit(): void {
  }

 

}
