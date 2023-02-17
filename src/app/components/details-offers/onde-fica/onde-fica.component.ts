import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from 'src/app/service/ofertas.service';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.scss']
})
export class OndeFicaComponent implements OnInit {

  public ofertasOndeFica: string = '';
  public error: string ="";
  public id: any;
  constructor(

    private route: ActivatedRoute,
    private ofertasService: OfertasService
  ) { }

  ngOnInit(): void {
    this.getOndeFica();
  }

  getOndeFica(): void {
    this.id = this.route.snapshot.parent?.paramMap.get('id');
    if (this.id) {
      this.ofertasService.getOndeFica(this.id).subscribe({
        next: (res: string) => {
          this.ofertasOndeFica = res;
        },
        error: (error: any) => {
          console.error(error);
          this.error = 'Ocorreu um erro ao buscar os detalhes da oferta.';
        }
      });
    }
  }

}
