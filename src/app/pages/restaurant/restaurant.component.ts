import { Component, OnInit } from '@angular/core';
import { OfertasService } from 'src/app/service/ofertas.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {

  public ofertasCategoria: any
  public error!: Error
  constructor( private ofertasService: OfertasService ) { }

  ngOnInit(): void {
    this.getOfertas();
  }

  getOfertas(){
    this.ofertasService.getOffersCategory('restaurante')
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
