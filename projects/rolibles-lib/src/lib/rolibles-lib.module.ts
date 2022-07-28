import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RoliblesLibComponent } from './rolibles-lib.component';
import { SelectYearComponent } from './components/select-year/select-year.component';



@NgModule({
  declarations: [
    RoliblesLibComponent,
    SelectYearComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RoliblesLibComponent
  ]
})
export class RoliblesLibModule { }
