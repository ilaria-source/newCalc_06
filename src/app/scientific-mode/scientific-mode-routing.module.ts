import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScientificModePage } from './scientific-mode.page';

const routes: Routes = [
  {
    path: '',
    component: ScientificModePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScientificModePageRoutingModule {}
