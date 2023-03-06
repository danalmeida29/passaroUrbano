import { ItemCarrinho } from "./carrinho.model";

export class Pedido {
    constructor(
        public primeiroNome: string,
        public sobrenome: string,
        public email: string,
        public endereco: string,
        public numero: string,
        public complemento: string,
        public formaDePagamento: string,
        public itens: Array<ItemCarrinho>
    ){}
}