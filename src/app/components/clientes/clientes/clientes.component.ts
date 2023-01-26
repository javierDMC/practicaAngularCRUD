import { Component } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {

  //nos traemos datos y metodos del servicio para poder disponer de ellos
  clientes:Cliente[]=[];

  constructor(private servicioCliente:ClienteService){};

  //ahora metemos el ngOnInit() para que cargue los datos, como el windoe.onload
  ngOnInit(){
    //en la variable this.clientes almacenamos todos los clientes con el metodo getClientes()
    this.clientes=this.servicioCliente.getClientes();
  }







}
