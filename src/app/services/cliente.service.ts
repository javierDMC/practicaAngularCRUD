import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  //declarar la variable cliente array del tipo cliente
  clientes:Array<Cliente>=[
    {
      id:1,
      nombre: 'Ana',
      cargo: 'Programadora' ,
      foto:'1.jpg'
    },
    {
      id:2,
      nombre: 'Elena',
      cargo: 'Administrativa',
      foto:'2.jpg'
    },
    {
      id:3,
      nombre: 'Juan',
      cargo: 'Analista' ,
      foto:'3.jpg'
    },
    {
      id:4,
      nombre: 'Luis',
      cargo: 'Programador' ,
      foto:'4.jpg'
    },
    {
      id:5,
      nombre: 'Maria',
      cargo: 'Diseñadora' ,
      foto:'5.jpg'
    },
    {
      id:6,
      nombre: 'Pedro',
      cargo: 'Marketing' ,
      foto:'6.jpg'
    }
 ]

getClientes(){
  return this.clientes;
}

getcliente(id:number){
  let pos=this.clientes.findIndex(c=>c.id==id);
  return this.clientes[pos];
}

nuevoCliente(cliente:Cliente){
  this.clientes.push(cliente);
}

modificarCliente(cliente:Cliente){
  let pos=this.clientes.findIndex(c=>c.id==cliente.id);
  this.clientes.splice(pos,1,cliente)
}

borrarCliente(id:number){
  let pos=this.clientes.findIndex(c=>c.id==id);
  this.clientes.splice(pos,1);
}


}
