import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from 'src/app/service/ofertas.service';
import { Oferta } from 'src/app/shared/oferta/oferta.model';

@Component({
  selector: 'app-details-offers',
  templateUrl: './details-offers.component.html',
  styleUrls: ['./details-offers.component.scss']
})
export class DetailsOffersComponent implements OnInit {

  public oferta!: Oferta;
  public error!: Error;

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService
    ) { }

  ngOnInit(): void {
    this.getOfertaId();
  }

  getOfertaId(){
    this.ofertasService.getOfertaId(this.route.snapshot.params['id'])    
    .subscribe(
      (oferta: Oferta) => {
        this.oferta = oferta;
        console.log(this.oferta);
      },
      (error: Error) => {
        this.error = error;
      }
    );
   
  }

}
