import { TypeCalc } from './../models/enums/typeCalculator.model';
import { ProgrammerModePageModule } from './../programmer-mode/programmer-mode.module';
import { ScientificModePageModule } from './../scientific-mode/scientific-mode.module';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import dataCalc from '../repositories/data_repositories.json';
import { ClassicModePageModule } from '../classic-mode/classic-mode.module';
import { NavController } from '@ionic/angular';
import { BrowserStack } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],

})
export class HomePage implements OnInit {
  public home: string;
  public dataCalcList: {typeName: TypeCalc; url: string; icon: string; isOn: boolean}[] = dataCalc;
  constructor(private activatedRoute: ActivatedRoute) { };
  // public navController string;
//qua potrei richiamare la calcolatrice con uno switch case e un re routering sul dataCalc.url
// getCalculator() //{
// //   click(typeName: TypeCalc)
// {
//   switch (dataCalc.typeName)
//   {
//     case TypeCalc.classic:
//       console.log('Hai selezionato la calcolatrice classica');
//       this.navController.navigateForward('./classic');
//       ClassicModePageModule;
//       break;
//     case TypeCalc.scientific:
//       console.log('Hai selezionato la calcolatrice scientifica');
//       ScientificModePageModule;
//       break;
//       case TypeCalc.programmer:
//         console.log('Hai selezionato la calcolatrice da programmatore');
//         //non ho idea di come sia ô.ó?
//       ProgrammerModePageModule;
//       break;
//       default:
//       break;
//   }
// }

  ngOnInit() {
  }

}
