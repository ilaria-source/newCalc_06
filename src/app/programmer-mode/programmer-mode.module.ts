import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgrammerModePageRoutingModule } from './programmer-mode-routing.module';

import { ProgrammerModePage } from './programmer-mode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgrammerModePageRoutingModule
  ],
  declarations: [ProgrammerModePage]
})
export class ProgrammerModePageModule {}
