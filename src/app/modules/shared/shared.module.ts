import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const MATERIAL_MODULES = [MatTableModule, MatFormFieldModule, MatInputModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, MATERIAL_MODULES],
  exports: [MATERIAL_MODULES],
})
export class SharedModule {}
