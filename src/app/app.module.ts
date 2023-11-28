import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ServiciosComponent } from './paginas/servicios/servicios.component';
import { ContactosComponent } from './paginas/contactos/contactos.component';
import { DetallesServiciosComponent } from './paginas/detalles-servicios/detalles-servicios.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ServiciosComponent,
    ContactosComponent,
    DetallesServiciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
