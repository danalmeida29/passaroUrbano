import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrdemDeCompraService } from 'src/app/service/ordem-de-compra.service';
import { Pedido } from '../../shared/model/pedido.model'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  @ViewChild('formulario') formulario!:NgForm

  @Input()
  idPedidoCompra!: number

  constructor(
    private ordemDeCompraService: OrdemDeCompraService
    ) { }

  ngOnInit(): void {
  }

  confirmarCompra(): void{
    let pedido: Pedido = new Pedido (
      this.formulario.value.endereco,
      this.formulario.value.numero,
      this.formulario.value.complemento,
      this.formulario.value.formaDePagamento
    )

    this.ordemDeCompraService.efetivarCompra(pedido)
    .subscribe((idPedido:number)=>{
      this.idPedidoCompra = idPedido
    })
  }

}
