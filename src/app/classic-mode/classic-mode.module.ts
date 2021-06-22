import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClassicModePageRoutingModule } from './classic-mode-routing.module';

import { ClassicModePage } from './classic-mode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClassicModePageRoutingModule
  ],
  declarations: [ClassicModePage]
})
export class ClassicModePageModule {}
