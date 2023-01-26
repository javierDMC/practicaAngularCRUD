import { Component, Input } from '@angular/core';
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

  constructor(private servicioCliente:ClienteService,
              //esto nos permitirá recoger el id del cliente activo
              private miRuta:ActivatedRoute){}

  ngOnInit(){
  //en esta variable cogemos la id
  this.idBorrar=this.miRuta.snapshot.params["id"];
  console.log(this.idBorrar)
  this.cliente=this.servicioCliente.getcliente(this.idBorrar);


  }

  borrar(idBorrar:number){
    this.servicioCliente.borrarCliente(idBorrar);
  }

}
