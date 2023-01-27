import { Component } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-nuevo',
  templateUrl: './cliente-nuevo.component.html',
  styleUrls: ['./cliente-nuevo.component.css']
})
export class ClienteNuevoComponent {

  //para crea un nuevo cliente aumenta automaticamente al siguiente id
  inputIdNuevo:number=this.servicioNuevoCliente.getClientes().length+1;
  inputNombreNuevo!:string;
  inputCargoNuevo!:string;
  inputFotoNuevo!:string;

  constructor(private servicioNuevoCliente:ClienteService){}


  nuevoCliente(){
    let clienteNuevo={
      id:this.inputIdNuevo,
      nombre:this.inputNombreNuevo,
      cargo:this.inputCargoNuevo,
      foto:this.inputFotoNuevo
    }

  this.servicioNuevoCliente.nuevoCliente(clienteNuevo);


  }



}
