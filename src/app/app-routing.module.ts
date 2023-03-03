import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComoUsarComponent } from './components/details-offers/como-usar/como-usar.component';
import { DetailsOffersComponent } from './components/details-offers/details-offers.component';
import { OndeFicaComponent } from './components/details-offers/onde-fica/onde-fica.component';

import { DiversionComponent } from './pages/diversion/diversion.component';
import { HomeComponent } from './pages/home/home.component';
import { OrdemDeCompraComponent } from './pages/ordem-de-compra/ordem-de-compra.component';
import { RestaurantComponent } from './pages/restaurant/restaurant.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "Restaurant", component: RestaurantComponent},
  {path: "Diversion", component: DiversionComponent},
  {path: "Detalhes/:id", component: DetailsOffersComponent, 
    children:[
      {path: "", component: ComoUsarComponent},
      {path: "Como-usar", component: ComoUsarComponent},
      {path: "Onde-fica", component: OndeFicaComponent}
    ]
  },
  {path: "ordem-compra", component: OrdemDeCompraComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
