import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaAnimalesTratadosPageRoutingModule } from './lista-animales-tratados-routing.module';

import { ListaAnimalesTratadosPage } from './lista-animales-tratados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaAnimalesTratadosPageRoutingModule
  ],
  declarations: [ListaAnimalesTratadosPage]
})
export class ListaAnimalesTratadosPageModule {}
