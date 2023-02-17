import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsOffersComponent } from './components/details-offers/details-offers.component';
import { DiversionComponent } from './pages/diversion/diversion.component';
import { HomeComponent } from './pages/home/home.component';
import { RestaurantComponent } from './pages/restaurant/restaurant.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "Restaurant", component: RestaurantComponent},
  {path: "Diversion", component: DiversionComponent},
  {path: "Detalhes/:id", component: DetailsOffersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
