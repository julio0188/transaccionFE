import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleRegistrosComponent } from './registro/detalle-registros.component';
import { EditarRegistrosComponent } from './registro/editar-registros.component';
import { ListaRegistrosComponent } from './registro/lista-registros.component';
import { NuevoRegistrosComponent } from './registro/nuevo-registros.component';

const routes: Routes = [
  {path: '', component: ListaRegistrosComponent},
  {path: 'detalle/:id', component: DetalleRegistrosComponent},
  {path: 'nuevo', component:NuevoRegistrosComponent},
  {path: 'editar/:id', component:EditarRegistrosComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
