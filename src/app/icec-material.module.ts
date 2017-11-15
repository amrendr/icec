import { NgModule } from '@angular/core';
import {
  MatSelectModule, MatInputModule, MatButtonModule, MatToolbarModule,
  MatIconModule, MatGridListModule, MatRadioModule, MatSidenavModule,
  MatListModule, MatCardModule, MatRippleModule, MatProgressBarModule
} from '@angular/material';


const ICEC_MATERIAL_MODULES = [
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatProgressBarModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatToolbarModule
];

@NgModule({
  imports: ICEC_MATERIAL_MODULES,
  exports: ICEC_MATERIAL_MODULES,
})

export class IcecMaterialModule { }
