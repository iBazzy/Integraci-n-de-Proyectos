import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarHoraPageRoutingModule } from './listar-hora-routing.module';

import { ListarHoraPage } from './listar-hora.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarHoraPageRoutingModule
  ],
  declarations: [ListarHoraPage]
})
export class ListarHoraPageModule {}
