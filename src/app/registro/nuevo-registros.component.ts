import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { subscribeOn, timeout } from 'rxjs';
import { Registro } from '../models/registro';
import { RegistroService } from '../service/registro.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-nuevo-registros',
  templateUrl: './nuevo-registros.component.html',
  styleUrls: ['./nuevo-registros.component.css']
})
export class NuevoRegistrosComponent implements OnInit{

    id: number = 0;
    descripcion = '';
    monto: number = 0;
    fecha = '';
    estado = '';

    constructor(
      private registroService: RegistroService,
      private toastr: ToastrService,
      private router: Router
      ){}

    ngOnInit(){}

    onCreate(): void {
      const registro = new Registro(this.id,this.descripcion, this.monto, this.fecha, this.estado);
      this.registroService.crear(registro).subscribe(
        data => {
          this.toastr.success('Registro ingresado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center',

        });
        this.router.navigate(['/']);

        },
        err => {
          this.toastr.error(err.error.mensaje, 'Fail', {
            timeOut: 3000, positionClass: 'toast-top-center',
  
          });
          this.router.navigate(['/']);
        }
      
      );
    }
}
