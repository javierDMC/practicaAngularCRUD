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
      foto:'1.jpg',
      votos:0
    },
    {
      id:2,
      nombre: 'Elena',
      cargo: 'Administrativa',
      foto:'2.jpg',
      votos:0
    },
    {
      id:3,
      nombre: 'Juan',
      cargo: 'Analista' ,
      foto:'3.jpg',
      votos:0
    },
    {
      id:4,
      nombre: 'Luis',
      cargo: 'Programador' ,
      foto:'4.jpg',
      votos:0
    },
    {
      id:5,
      nombre: 'Maria',
      cargo: 'Diseñadora' ,
      foto:'5.jpg',
      votos:0
    },
    {
      id:6,
      nombre: 'Pedro',
      cargo: 'Marketing' ,
      foto:'6.jpg',
      votos:0
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
  let pos=this.clientes.findIndex(c=>c.id==cliente.id)
}

borrarCliente(id:number){
  let pos=this.clientes.findIndex(c=>c.id==id);
  this.clientes.splice(pos,1);
}


}
