import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CarrinhoService } from 'src/app/service/carrinho.service';
import { OrdemDeCompraService } from 'src/app/service/ordem-de-compra.service';
import { Pedido } from '../../shared/model/pedido.model'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup = new FormGroup({
    "primeiroNome": new FormControl(null, [Validators.minLength(3), Validators.maxLength(120), Validators.required]),
    "sobrenome": new FormControl(null, [Validators.minLength(3), Validators.maxLength(120), Validators.required]),
    "email": new FormControl(null, [Validators.email, Validators.minLength(5), Validators.maxLength(120), Validators.required]),
    "endereco": new FormControl(null, [Validators.minLength(5), Validators.maxLength(120), Validators.required]),
    "numero": new FormControl(null, [Validators.minLength(1), Validators.maxLength(20), Validators.required]),
    "complemento": new FormControl(null),
    "formaDePagamento": new FormControl(null, [Validators.required]),
  })

    idPedidoCompra!: number
  constructor(
    private ordemDeCompraService: OrdemDeCompraService,
    private carrinhoService: CarrinhoService
    ) { }

  ngOnInit(): void {
  }

  confirmarCompra(): void{

    if(this.formulario.status === 'INVALID'){
      this.formulario.get('primeiroNome')?.markAllAsTouched()
      this.formulario.get('sobrenome')?.markAllAsTouched()
      this.formulario.get('email')?.markAllAsTouched()
      this.formulario.get('endereco')?.markAsTouched()
      this.formulario.get('numero')?.markAsTouched()
      this.formulario.get('complemento')?.markAsTouched()
      this.formulario.get('formaDePagamento')?.markAsTouched()
    }else{
        if(this.carrinhoService.exibirItens().length === 0){
          alert('Seu carrinho está vazio')
        }else{
            let pedido: Pedido = new Pedido(
              this.formulario.value.primeiroNome,
              this.formulario.value.sobrenome,
              this.formulario.value.email,
              this.formulario.value.endereco,
              this.formulario.value.numero,
              this.formulario.value.complemento,
              this.formulario.value.formaDePagamento,
              this.carrinhoService.exibirItens()
            )

            this.ordemDeCompraService.efetivarCompra(pedido)
            .subscribe((idPedido:number)=>{
              this.idPedidoCompra = idPedido
              this.carrinhoService.clearCarrinho()
            })
          }

      }
  }

}
