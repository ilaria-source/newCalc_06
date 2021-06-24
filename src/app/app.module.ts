import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProgrammerModePage } from './programmer-mode/programmer-mode.page';
import { ScientificModePage } from './scientific-mode/scientific-mode.page';
import { ClassicModePage } from './classic-mode/classic-mode.page';
import { HomePage } from './Home/home.page';
import { ScientificModePageModule } from './scientific-mode/scientific-mode.module';
import { ClassicModePageModule } from './classic-mode/classic-mode.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProgrammerModePageModule } from './programmer-mode/programmer-mode.module';

@NgModule({
  declarations: [
     AppComponent
    // HomePage,
    // ClassicModePage,
    // ScientificModePage,
    // ProgrammerModePage
  ],

  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    RouterModule.forRoot([
    {path: './classic', component: ClassicModePage},
    {path: './scientific', component: ScientificModePage},
    {path: './programmer', component: ProgrammerModePage}
  ])
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
