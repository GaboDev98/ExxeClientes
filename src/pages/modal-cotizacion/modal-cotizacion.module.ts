import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalCotizacionPage } from './modal-cotizacion';

@NgModule({
  declarations: [
    ModalCotizacionPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalCotizacionPage),
  ],
})
export class ModalCotizacionPageModule {}
