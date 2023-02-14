import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientHttpService {
  url="http://localhost:3000/clientes"//esto es lo que enlaza con el JSON server

  constructor(private miHttp:HttpClient) { }

  //-------------- Deprecated pero usado al 100% -----------------//
  // Gestionamos el error en componente.

  getClientes():Observable<Cliente[]>{
    return this.miHttp.get<Cliente[]>(this.url)
  }

  getCliente(id:number):Observable<Cliente>{
    return this.miHttp.get<Cliente>(this.url + "/"+ id)
  }

  deleteCliente(id:number):Observable<Cliente>{
    return this.miHttp.delete<Cliente>(this.url + "/" + id)
  }

  postCliente(cliente:Cliente):Observable<Cliente>{
    return this.miHttp.post<Cliente>(this.url,cliente)
  }

  putCliente(cliente:Cliente):Observable<Cliente>{
    return this.miHttp.put<Cliente>(this.url +"/"+cliente.id,cliente)
  }




}
