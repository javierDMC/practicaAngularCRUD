import { Injectable } from '@angular/core';
import { Trabajador } from '../models/trabajador';

@Injectable({
  providedIn: 'root'
})
export class TrabajadorService {

  constructor() { }

  trabajadores:Array<Trabajador>=[
    {
      idTrabajador:1,
      nombre: 'Ana',
      orden: "",
      ciudad: 'Borboto'

    },
    {
      idTrabajador:2,
      nombre: 'Elena',
      orden: "",
      ciudad: 'Valencia'
    },
    {
      idTrabajador:3,
      nombre: 'Juan',
      orden: "",
      ciudad: 'Poble Nou'
    },
    {
      idTrabajador:4,
      nombre: 'Luis',
      orden: "",
      ciudad: 'Valencia'
    },
    {
      idTrabajador:5,
      nombre: 'Maria',
      orden: "",
      ciudad: 'Castellon'
    },
    {
      idTrabajador:6,
      nombre: 'Pedro',
      orden: "",
      ciudad: 'Borboto'
    }
 ]
}
