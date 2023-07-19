import { Component, OnInit } from '@angular/core';
import { Registro } from '../models/registro';
import { RegistroService } from '../service/registro.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lista-registros',
  templateUrl: './lista-registros.component.html',
  styleUrls: ['./lista-registros.component.css']
})
export class ListaRegistrosComponent implements OnInit{

  registros: Registro[] = [];

  constructor(
    private registroService: RegistroService,
    private toastr: ToastrService,
    private router: Router){

  }

  ngOnInit(){
    this.cargarRegistros();
  }

  cargarRegistros(): void{
    this.registroService.lista().subscribe(
      data => {
        this.registros = data;
      },
      err => {
        console.log(err);
      }
      
    )
  }

  borrar(id: number){
    this.registroService.borrar(id).subscribe(
      data => {
        this.toastr.success('Registro eliminado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center',

        });
        this.cargarRegistros();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',

        });
        
      }
    );
  }

}
