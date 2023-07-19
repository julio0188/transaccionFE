import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaRegistrosComponent } from './registro/lista-registros.component';
import { DetalleRegistrosComponent } from './registro/detalle-registros.component';
import { NuevoRegistrosComponent } from './registro/nuevo-registros.component';
import { EditarRegistrosComponent } from './registro/editar-registros.component';

import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms'

//external
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    ListaRegistrosComponent,
    DetalleRegistrosComponent,
    NuevoRegistrosComponent,
    EditarRegistrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
