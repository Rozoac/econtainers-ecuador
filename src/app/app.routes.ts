import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from './components/homepage/homepage.component';
import {QuienesSomosComponent} from './components/quienes-somos/quienes-somos.component';
import {TrabajaConNosotrosComponent} from './components/trabaja-con-nosotros/trabaja-con-nosotros.component';
import {ContenedorComponent} from './components/contenedor/contenedor.component';
import {CompromisoEmpresarialPComponent} from './components/compromiso-empresarial-p/compromiso-empresarial-p.component';
import {PqrsComponent} from './components/pqrs/pqrs.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'quienes-somos', component: QuienesSomosComponent },
  { path: 'compromiso-empresarial', component: CompromisoEmpresarialPComponent },
  { path: 'trabaja', component: TrabajaConNosotrosComponent },
  { path: 'pqrs', component: PqrsComponent },
  { path: 'contenedor/:id', component: ContenedorComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
