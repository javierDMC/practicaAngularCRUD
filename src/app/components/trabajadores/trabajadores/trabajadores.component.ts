import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Trabajador } from 'src/app/models/trabajador';

@Component({
  selector: 'app-trabajadores',
  templateUrl: './trabajadores.component.html',
  styleUrls: ['./trabajadores.component.css']
})
export class TrabajadoresComponent {

  trabajadores:Trabajador[]=[];

  idTrabajador!:number;
  orden!:string;
  ciudad!:string;

  constructor(private router:Router,
              private rutaActiva:ActivatedRoute){}

  ngOnInit(){
    this.idTrabajador=this.rutaActiva.snapshot.params['id']

    this.rutaActiva.queryParams.subscribe(params=>{this.orden=params['orden']
                                                   this.ciudad=params['ciudad']})
  }

  volverTrabajadores(){
    this.router.navigate(["/trabajadores/3"],
                        {queryParams:{orden:'ascendente',
                        ciudad:'valencia'}});
  }


}
