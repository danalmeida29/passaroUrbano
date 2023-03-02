import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { FooterComponent } from './components/footer/footer.component';

import { CardComponent } from './components/card/card.component';
import { RestaurantComponent } from './pages/restaurant/restaurant.component';
import { DiversionComponent } from './pages/diversion/diversion.component';
import { AnuncioCardComponent } from './components/anuncio-card/anuncio-card.component';

import { DetailsOffersComponent } from './components/details-offers/details-offers.component';
import { ComoUsarComponent } from './components/details-offers/como-usar/como-usar.component';
import { OndeFicaComponent } from './components/details-offers/onde-fica/onde-fica.component';
import { FormatCurrencyPipe } from './shared/oferta/pipes/formatCurrency.pipe';
import { DescricaoReduzida } from './shared/oferta/pipes/descricao-reduzida.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuBarComponent,
    FooterComponent,
    CardComponent,
    RestaurantComponent,
    DiversionComponent,
    AnuncioCardComponent,
    DetailsOffersComponent,
    ComoUsarComponent,
    OndeFicaComponent,
    FormatCurrencyPipe,
    DescricaoReduzida
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
    provide: LOCALE_ID, useValue: 'en-US'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
