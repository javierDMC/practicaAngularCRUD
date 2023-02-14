import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './components/clientes/cliente/cliente.component';
import { ClientesComponent } from './components/clientes/clientes/clientes.component';
import { ClienteNuevoComponent } from './components/clientes/cliente-nuevo/cliente-nuevo.component';
import { ClienteModificarComponent } from './components/clientes/cliente-modificar/cliente-modificar.component';
import { ClienteBorrarComponent } from './components/clientes/cliente-borrar/cliente-borrar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { HeaderComponent } from './components/header/header.component';
import { Error404Component } from './components/error404/error404.component';
import { FormsModule } from '@angular/forms';
import { TrabajadoresComponent } from './components/trabajadores/trabajadores/trabajadores.component';

import { HttpClientModule } from '@angular/common/http/index'

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    ClientesComponent,
    ClienteNuevoComponent,
    ClienteModificarComponent,
    ClienteBorrarComponent,
    InicioComponent,
    HeaderComponent,
    Error404Component,
    TrabajadoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
