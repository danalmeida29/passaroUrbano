import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { OfertasService } from 'src/app/service/ofertas.service';
import { Oferta } from 'src/app/shared/oferta/oferta.model';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit, OnDestroy {

  public ofertasList: Oferta[] = [];
  public filteredList: Oferta[] = [];
  public error!: Error;

  private ofertasSub: Subscription | undefined;

  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {
    this.carregarOfertas();
  }

  ngOnDestroy(): void {
    if (this.ofertasSub) {
      this.ofertasSub.unsubscribe();
    }
  }

  carregarOfertas() {
    this.ofertasSub = this.ofertasService.pesquisaOfertas().subscribe(
      (res: Oferta[]) => {
        this.ofertasList = res;
        this.filteredList = this.ofertasList;
      },
      (error: Error) => {
        this.error = error;
      }
    );
  }

  pesquisar(event: Event) {
    const pesquisaValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.filteredList = this.ofertasList.filter((oferta: Oferta) => 
      oferta.titulo.trim().toLowerCase().includes(pesquisaValue) ||
      (oferta.descricao_oferta + oferta.categoria + oferta.anunciante).trim().toLowerCase().includes(pesquisaValue)
    );

    console.log('pesquisa feita foi: ', this.filteredList);
  }

}
