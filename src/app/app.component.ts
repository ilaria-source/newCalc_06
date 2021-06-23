import { Component } from '@angular/core';
import { TypeCalc } from './models/enums/typeCalculator.model';
import dataCalc from './repositories/data_repositories.json';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  dataCalcList: {typeName: TypeCalc; url: string; icon: string; active: boolean}[] = dataCalc;
  constructor() {}
}
//immagina l'appcomponent come il main di c#, qui richiamo ciò che mi serve ma non vi è logica alcuna
