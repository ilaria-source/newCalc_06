import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScientificModePageRoutingModule } from './scientific-mode-routing.module';

import { ScientificModePage } from './scientific-mode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScientificModePageRoutingModule
  ],
  declarations: [ScientificModePage]
})
export class ScientificModePageModule {}
