import { Component, OnInit } from '@angular/core';
import { Oferta } from 'src/app/shared/oferta/oferta.model';
import { OfertasService } from '../../service/ofertas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers:[ OfertasService ]
})
export class HomeComponent implements OnInit {

  public ofertas!: Oferta[]

  constructor(
    private ofertasService: OfertasService

    ) { }

  ngOnInit(): void {
    // this.ofertas = this.ofertasService.getOfertas()
    // console.log(this.ofertas)

    this.ofertasService.getOfertas()
    .subscribe(
      (ofertas: Oferta[]) => {
        this.ofertas = ofertas;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

}
