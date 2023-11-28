import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ServiciosComponent } from './paginas/servicios/servicios.component';
import { DetallesServiciosComponent } from './paginas/detalles-servicios/detalles-servicios.component';
import { ContactosComponent } from './paginas/contactos/contactos.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'servicios', component: ServiciosComponent},
  {path: 'servicios/:id', component: DetallesServiciosComponent},
  {path: 'contactos', component: ContactosComponent},
  {path: 'detalles-servicios', component: ServiciosComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
