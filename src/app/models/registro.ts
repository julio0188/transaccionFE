import { transition } from "@angular/animations";

export class Registro {
    id: number;
    descripcion: string;
    monto: number;
    fecha: string;
    estado: string;

    constructor(id: number, descripcion: string, monto: number, fecha: string, estado: string){
        this.id = id;
        this.descripcion = descripcion;
        this.monto = monto;
        this.fecha = fecha;
        this.estado = estado;
    }

}

