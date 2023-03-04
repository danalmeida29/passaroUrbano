import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OrdemDeCompraService } from 'src/app/service/ordem-de-compra.service';
import { Pedido } from '../../shared/model/pedido.model'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup = new FormGroup({
    "endereco": new FormControl(null, [Validators.minLength(5), Validators.maxLength(120), Validators.required]),
    "numero": new FormControl(null, [Validators.minLength(1), Validators.maxLength(20), Validators.required]),
    "complemento": new FormControl(null),
    "formaDePagamento": new FormControl(null, [Validators.required]),
  })

    idPedidoCompra!: number
  constructor(
    private ordemDeCompraService: OrdemDeCompraService
    ) { }

  ngOnInit(): void {
  }

  confirmarCompra(): void{

    if(this.formulario.status === 'INVALID'){

      console.log('formulario está invalido')

      this.formulario.get('endereco')?.markAsTouched()
      this.formulario.get('numero')?.markAsTouched()
      this.formulario.get('complemento')?.markAsTouched()
      this.formulario.get('formaDePagamento')?.markAsTouched()
    }else{

      let pedido: Pedido = new Pedido(
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

}
