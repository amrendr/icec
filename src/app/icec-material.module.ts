import { NgModule } from '@angular/core';
import {
  MdSelectModule, MdInputModule, MdButtonModule, MdToolbarModule,
  MdIconModule, MdGridListModule, MdRadioModule, MdSidenavModule,
  MdListModule, MdCardModule, MdRippleModule, MdProgressBarModule
} from '@angular/material';


const ICEC_MATERIAL_MODULES = [
  MdButtonModule,
  MdCardModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdProgressBarModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdToolbarModule
];

@NgModule({
  imports: ICEC_MATERIAL_MODULES,
  exports: ICEC_MATERIAL_MODULES,
})

export class IcecMaterialModule { }
