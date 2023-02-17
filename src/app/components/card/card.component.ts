import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input()
  ofertaCover: string = "";

  @Input()
  ofertaTitle: string = "";

  @Input()
  ofertaDescription: string = "";

  @Input()
  ofertaPrice: string = "";
  
  @Input()
  Id: string = ""
  constructor() { }

  ngOnInit(): void {
  }

}
