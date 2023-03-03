import { Component, OnInit } from '@angular/core';
import { OrdemDeCompraService } from 'src/app/service/ordem-de-compra.service';
import { Pedido } from '../../shared/model/pedido.model'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  endereco: string = "";
  numero: string = "";
  complemento: string = "";
  formaDePagamento: string = "";

  // Validador dos campos
  enderecoValidado!: boolean;
  numeroValidado!: boolean;
  complementoValidado!: boolean;
  formaDePagamentoValidado!: boolean;

  // Estadado Inicial dos campos
  enderecoEstadoInicial: boolean = true;
  numeroEstadoInicial: boolean = true;
  complementoEstadoInicial: boolean = true;
  formaDePagamentoEstadoInicial: boolean = true;

  // Estado do button
  formEstado: string = "";
  //Pedido
  pedido: Pedido = new Pedido ("", "", "", "")

  idPedidoCompra!: number;
  constructor(private ordemDeCompraService: OrdemDeCompraService ) { }

  ngOnInit(): void {
  }

  atualizarEndereco(endereco: string){
    this.endereco = endereco

    this.enderecoEstadoInicial = false

    if(this.endereco.length > 3){
      this.enderecoValidado = true
    } else{
      this.enderecoValidado = false
    }

    this.habilitaButton()
  }
  atualizarNumero(numero: string){
    this.numero = numero

    this.numeroEstadoInicial = false

    if(this.numero.length > 0){

      this.complementoEstadoInicial = false

      this.numeroValidado = true
    } else{
      this.numeroValidado = false
    }

    this.habilitaButton()
  }
  atualizarComplemento(complemento: string){
    this.complemento = complemento

    this.formaDePagamentoEstadoInicial = false

    if(this.complemento.length > 0){
      this.complementoValidado = true
    }
  }
  atualizarFormaDePegamento(formaDePagamento: string){
    this.formaDePagamento = formaDePagamento
    if(this.formaDePagamento.length > 0){
      this.formaDePagamentoValidado = true
    } else{
      this.formaDePagamentoValidado = false
    }

    this.habilitaButton()
  }

  habilitaButton():void{
    if(this.enderecoValidado === true && this.formaDePagamentoValidado === true && this.numeroValidado === true){
      this.formEstado = 'disabled'
    }else{
      this.formEstado = ''
    }
  }

  confirmarPedido(){
    this.pedido.endereco = this.endereco
    this.pedido.numero = this.numero
    this.pedido.complemento = this.complemento
    this.pedido.formaDePagamento = this.formaDePagamento

    this.ordemDeCompraService.efetivarCompra(this.pedido).subscribe((idPedido: number) => {
      this.idPedidoCompra = idPedido
    })
  }

}
