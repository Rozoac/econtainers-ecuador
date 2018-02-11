import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule, Http} from '@angular/http';
import {APP_ROUTING} from './app.routes';

// componentes
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { TrabajaConNosotrosComponent } from './components/trabaja-con-nosotros/trabaja-con-nosotros.component';
import { ContenedorComponent } from './components/contenedor/contenedor.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { SliderPrincipalComponent } from './components/slider-principal/slider-principal.component';
import { TrayectoriaComponent } from './components/trayectoria/trayectoria.component';
import { VentajasComponent } from './components/ventajas/ventajas.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { Formulario2Component } from './components/formulario-2/formulario-2.component';
import { CompromisoEmpresarialPComponent } from './components/compromiso-empresarial-p/compromiso-empresarial-p.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { TestimoniosComponent } from './components/testimonios/testimonios.component';
import { PlaneacionComponent } from './components/planeacion/planeacion.component';
import { PqrsComponent } from './components/pqrs/pqrs.component';
import { ContadorComponent } from './components/contador/contador.component';



// servicios

import {ContenedoresService} from './service/contenedores.service';
import {PortafolioService} from './service/portafolio.service';
import {TrabajosService} from './service/trabajos.service';
import {CorreoService} from './service/correo.service';

import { SweetAlertService } from 'angular-sweetalert-service';

// GOOGLE MAPS API
import { AgmCoreModule } from '@agm/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';
import {NgxPageScrollModule} from 'ngx-page-scroll';

export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}




@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    FooterComponent,
    QuienesSomosComponent,
    TrabajaConNosotrosComponent,
    ContenedorComponent,
    PortafolioComponent,
    SliderPrincipalComponent,
    TrayectoriaComponent,
    VentajasComponent,
    ClientesComponent,
    FormularioComponent,
    MapaComponent,
    Formulario2Component,
    CompromisoEmpresarialPComponent,
    PlaneacionComponent,
    PqrsComponent,
    ContadorComponent,
    TestimoniosComponent,
    CarrouselComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    }),
    ReactiveFormsModule,
    FormsModule,
    NgxCarouselModule,
    APP_ROUTING,
    NgxPageScrollModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD9h_JPuErKyrfGHD5HGY0lG45AxPj_Ejo'
    })  ],
  providers: [ContenedoresService, TrabajosService, PortafolioService, CorreoService,SweetAlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
