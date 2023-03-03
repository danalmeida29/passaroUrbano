import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordem-compra-sucesso',
  templateUrl: './ordem-compra-sucesso.component.html',
  styleUrls: ['./ordem-compra-sucesso.component.scss']
})
export class OrdemCompraSucessoComponent implements OnInit {
  @Input() idPedidoCompra!: number
  constructor() { }

  ngOnInit(): void {
  }

}