import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {

  //definir la variable con la que vamos a trabajar y con la ! por si es undefined
  cliente!:Cliente;

  //siempre va a haber cosas porque los servicios se inicializan desde aqui
  //con esto podemos utilizar los metodos del servicio
  constructor(private servicioCliente:ClienteService,
              //esto nos permitirá recoger el id del cliente activo
              private miRuta:ActivatedRoute){}

  ngOnInit(){
    //en esta variable cogemos la id
    let id=this.miRuta.snapshot.params["id"];
    this.cliente=this.servicioCliente.getcliente(id);
  }




}
