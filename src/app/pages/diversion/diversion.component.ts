import { Component, OnInit } from '@angular/core';
import { OfertasService } from 'src/app/service/ofertas.service';

@Component({
  selector: 'app-diversion',
  templateUrl: './diversion.component.html',
  styleUrls: ['./diversion.component.scss']
})
export class DiversionComponent implements OnInit {

  public ofertasCategoria: any
  public error!: Error
  constructor( private ofertasService: OfertasService ) { }

  ngOnInit(): void {
    this.getOfertas();
  }

  getOfertas(){
    this.ofertasService.getOffersCategory('diversao')
    .subscribe(
      (res: string) => {
        this.ofertasCategoria = res;
      },
      (error: Error) => {
        this.error = error;
      }
    );
  }

}
