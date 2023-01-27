import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-modificar',
  templateUrl: './cliente-modificar.component.html',
  styleUrls: ['./cliente-modificar.component.css']
})
export class ClienteModificarComponent {


  cliente!:Cliente;

  idModificar!:number;

  constructor(private servicioModificarCliente:ClienteService,
              private miRuta:ActivatedRoute){}

  ngOnInit(){
    this.idModificar=this.miRuta.snapshot.params["id"];
    this.cliente=this.servicioModificarCliente.getcliente(this.idModificar);
  }

  modificarCliente(clienteModificar:Cliente){
    this.servicioModificarCliente.modificarCliente(this.cliente);
  }

}
