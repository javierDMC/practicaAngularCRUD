import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteBorrarComponent } from './components/clientes/cliente-borrar/cliente-borrar.component';
import { ClienteModificarComponent } from './components/clientes/cliente-modificar/cliente-modificar.component';
import { ClienteNuevoComponent } from './components/clientes/cliente-nuevo/cliente-nuevo.component';
import { ClienteComponent } from './components/clientes/cliente/cliente.component';
import { ClientesComponent } from './components/clientes/clientes/clientes.component';
import { Error404Component } from './components/error404/error404.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  {path:"",component:InicioComponent},
  {path:"clientes", component:ClientesComponent},
  {path:"cliente/:id", component:ClienteComponent},
  {path:"clientes/nuevo", component:ClienteNuevoComponent},
  {path:"clientes/modificar/:id", component:ClienteModificarComponent},
  {path:"clientes/borrar/:id", component:ClienteBorrarComponent},
  //la ruta error siempre debe ser la ultima
  {path:"**",component:Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
