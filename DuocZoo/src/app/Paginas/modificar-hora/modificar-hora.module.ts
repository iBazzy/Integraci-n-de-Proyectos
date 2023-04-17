import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificarHoraPageRoutingModule } from './modificar-hora-routing.module';

import { ModificarHoraPage } from './modificar-hora.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificarHoraPageRoutingModule
  ],
  declarations: [ModificarHoraPage]
})
export class ModificarHoraPageModule {}
