import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCardModule, MatGridListModule, MatIconModule,
  MatInputModule, MatListModule, MatProgressBarModule, MatRadioModule,
  MatRippleModule, MatSelectModule, MatSidenavModule, MatToolbarModule
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
