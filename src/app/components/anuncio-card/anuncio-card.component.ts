import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-anuncio-card',
  templateUrl: './anuncio-card.component.html',
  styleUrls: ['./anuncio-card.component.scss']
})
export class AnuncioCardComponent implements OnInit {

  @Input()
  ofertaTitle: string = "";
  
  @Input()
  ofertaDescription: string ="";

  @Input()
  ofertaAnunciado: string = "";

  @Input()
  ofertaPrice: string = "";

  @Input()
  ofertaCover: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
