import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, SharedModule, ComponentsModule],
})
export class NpmRegistryModule {}
