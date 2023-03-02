import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { OfertasService } from 'src/app/service/ofertas.service';
import { Oferta } from 'src/app/shared/oferta/oferta.model';
import * as unorm from 'unorm';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit, OnDestroy {

  public ofertasList: Oferta[] = [];
  public filteredList: Oferta[] = [];
  public error!: Error;
  public pesquisaValue: string = '';
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
      },
      (erro: any) => {
        this.error = erro;
        console.log('erro status', erro.status)
      }
    );
  }

  
  /**
   * 
   * @param event obtem e devolve o resultado baseado no valor informado pelo o usuario.
   */
  pesquisar(event: Event) {
    this.pesquisaValue = unorm.nfd((event.target as HTMLInputElement).value.trim().toLowerCase());
    if (this.pesquisaValue === '') { // verificando se o input está vazio
      this.filteredList = []; // limpando a lista de filtro
    } else {
      this.filteredList = this.ofertasList.filter((oferta: Oferta) => 
        unorm.nfd((oferta.descricao_oferta + oferta.titulo).trim().toLowerCase()).includes(this.pesquisaValue)
      );
    }
    console.log('pesquisa feita foi: ', this.filteredList);
  }

  limpaPesquisa():void{
    this.filteredList = [];
    this.pesquisaValue = '';
  }

}


