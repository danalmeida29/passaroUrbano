import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from 'src/app/service/ofertas.service';


@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.scss']
})
export class ComoUsarComponent implements OnInit {

  public ofertasComoUsar: string = '';
  public error: string ="";
  public id: any;
  constructor(

    private route: ActivatedRoute,
    private ofertasService: OfertasService
  ) { }

  ngOnInit(): void {
    this.getComoUsar();
  }

  getComoUsar(): void {
    this.id = this.route.snapshot.parent?.paramMap.get('id');
    if (this.id) {
      this.ofertasService.getComoUsar(this.id).subscribe({
        next: (res: string) => {
          this.ofertasComoUsar = res;
        },
        error: (error: any) => {
          console.error(error);
          this.error = 'Ocorreu um erro ao buscar os detalhes da oferta.';
        }
      });
    }
  }

}
