import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cliente-modificar',
  templateUrl: './cliente-modificar.component.html',
  styleUrls: ['./cliente-modificar.component.css']
})
export class ClienteModificarComponent {

   inputIdModificar!:number;
   inputNombreModificar!:string;
   inputCargoModificar!:string;
   inputFotoModificar!:string;

  cliente!:Cliente;

  idModificar!:number;

  constructor(private servicioModificarCliente:ClienteService,
              private miRuta:ActivatedRoute,
              private miRouter:Router){}

  ngOnInit(){
    this.idModificar=this.miRuta.snapshot.params["id"];
    this.cliente=this.servicioModificarCliente.getcliente(this.idModificar);
    this.inputIdModificar=this.idModificar;
    this.inputNombreModificar=this.cliente.nombre;
    this.inputCargoModificar=this.cliente.cargo;
    this.inputFotoModificar=this.cliente.foto;
  }

  modificarCliente(){
    let clienteModificado={
      id:this.inputIdModificar,
      nombre:this.inputNombreModificar,
      cargo:this.inputCargoModificar,
      foto:this.inputFotoModificar
    }

  this.servicioModificarCliente.modificarCliente(clienteModificado);
  this.miRouter.navigate(['/clientes']);
  }

}
