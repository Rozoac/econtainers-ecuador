import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {APP_ROUTING} from './app.routes';

// componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { TrabajaConNosotrosComponent } from './components/trabaja-con-nosotros/trabaja-con-nosotros.component';
import { ContenedorComponent } from './components/contenedor/contenedor.component';
import { TrabajoComponent } from './components/trabajo/trabajo.component';
import { SubirComponent } from './components/shared/subir/subir.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { ConstruccionComponent } from './components/construccion/construccion.component';
import { SliderPrincipalComponent } from './components/slider-principal/slider-principal.component';
import { TrayectoriaComponent } from './components/trayectoria/trayectoria.component';
import { VentajasComponent } from './components/ventajas/ventajas.component';
import { LineasDeNegocioComponent } from './components/lineas-de-negocio/lineas-de-negocio.component';
import { PautaComponent } from './components/pauta/pauta.component';
import { CompromisoEmpresarialComponent } from './components/compromiso-empresarial/compromiso-empresarial.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { Formulario2Component } from './components/formulario-2/formulario-2.component';
import { CompromisoEmpresarialPComponent } from './components/compromiso-empresarial-p/compromiso-empresarial-p.component';



// servicios

import {ContenedoresService} from './service/contenedores.service';
import {PortafolioService} from './service/portafolio.service';
import {TrabajosService} from './service/trabajos.service';
import {AuthService} from './service/auth.service';

// GOOGLE MAPS API
import { AgmCoreModule } from '@agm/core';
//captcha
import { RecaptchaModule } from 'ng2-recaptcha';
import { ClientesPComponent } from './components/clientes-p/clientes-p.component';
import { PlaneacionComponent } from './components/planeacion/planeacion.component';
import { PortafolioPageComponent } from './components/portafolio-page/portafolio-page.component';
import { LandingComponent } from './components/landing/landing.component';
import { PqrsComponent } from './components/pqrs/pqrs.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    FooterComponent,
    QuienesSomosComponent,
    TrabajaConNosotrosComponent,
    ContenedorComponent,
    TrabajoComponent,
    SubirComponent,
    PortafolioComponent,
    ConstruccionComponent,
    SliderPrincipalComponent,
    TrayectoriaComponent,
    VentajasComponent,
    LineasDeNegocioComponent,
    PautaComponent,
    CompromisoEmpresarialComponent,
    ClientesComponent,
    FormularioComponent,
    MapaComponent,
    ContactoComponent,
    Formulario2Component,
    CompromisoEmpresarialPComponent,
    ClientesPComponent,
    PlaneacionComponent,
    PortafolioPageComponent,
    LandingComponent,
    PqrsComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    APP_ROUTING,
    RecaptchaModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD9h_JPuErKyrfGHD5HGY0lG45AxPj_Ejo'
    })  ],
  providers: [ContenedoresService, TrabajosService, PortafolioService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
