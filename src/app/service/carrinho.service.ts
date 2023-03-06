import { Injectable } from '@angular/core';
import { ItemCarrinho } from '../shared/model/carrinho.model';
import { Oferta } from '../shared/model/oferta.model';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

public itens: ItemCarrinho [] = [];

  constructor() { }

  exibirItens(): ItemCarrinho[]{
    return this.itens
  }

  putItem(oferta:Oferta){
    let itemCarrinho: ItemCarrinho = new ItemCarrinho(
      oferta.id,
      oferta.imagens,
      oferta.titulo,
      oferta.descricao_oferta,
      oferta.valor,
      1
    )

      let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id === itemCarrinho.id)
      
      if(itemCarrinhoEncontrado){
        itemCarrinhoEncontrado.quantidade += 1 
      }else{
        this.itens.push(itemCarrinho)
      }
  }


  alterarQuantidade(itemCarrinho: ItemCarrinho, quantidade: number){
    let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id === itemCarrinho.id)
      
    if(itemCarrinhoEncontrado){
      itemCarrinhoEncontrado.quantidade += quantidade
      if(itemCarrinhoEncontrado.quantidade === 0){
        this.itens.splice(this.itens.indexOf(itemCarrinhoEncontrado),1)
      }
    } 
  }

  clearCarrinho(): void{
    this.itens = []
  }

}

 
