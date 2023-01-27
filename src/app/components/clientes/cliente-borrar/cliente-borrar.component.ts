import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-borrar',
  templateUrl: './cliente-borrar.component.html',
  styleUrls: ['./cliente-borrar.component.css']
})
export class ClienteBorrarComponent {

  cliente!:Cliente;

  idBorrar!:number;

  constructor(private servicioBorrarCliente:ClienteService,
              //esto nos permitirá recoger el id del cliente activo
              private miRuta:ActivatedRoute){}

  ngOnInit(){
  //en esta variable cogemos la id
  this.idBorrar=this.miRuta.snapshot.params["id"];
  this.cliente=this.servicioBorrarCliente.getcliente(this.idBorrar);


  }

  borrar(idBorrar:number){
    this.servicioBorrarCliente.borrarCliente(idBorrar);
  }

}
