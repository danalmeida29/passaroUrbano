import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CarrinhoService } from 'src/app/service/carrinho.service';
import { OrdemDeCompraService } from 'src/app/service/ordem-de-compra.service';
import { ItemCarrinho } from 'src/app/shared/model/carrinho.model';
import { Pedido } from '../../shared/model/pedido.model'

@Component({
  selector: 'app-ordem-de-compra',
  templateUrl: './ordem-de-compra.component.html',
  styleUrls: ['./ordem-de-compra.component.scss']
})
export class OrdemDeCompraComponent implements OnInit {

  public itensCarrinho: ItemCarrinho[] = []
  carrinhoVazio!: TemplateRef<any>;
  constructor( private carrinhoService: CarrinhoService ) { }

  ngOnInit(): void {
    this.itemCarrinho()
  
  }

 
  itemCarrinho(){
    this.itensCarrinho = this.carrinhoService.exibirItens()
    return this.itensCarrinho
  }

  totalCompras(): number{
    let total: number = 0
    this.carrinhoService.itens
    .map((item: ItemCarrinho)=>{
      total = total + (item.valor * item.quantidade)
    })

    return total
  }


  alterarQuantidade(item:ItemCarrinho, quantidade:number){
    this.carrinhoService.alterarQuantidade(item, quantidade)
  }
}
