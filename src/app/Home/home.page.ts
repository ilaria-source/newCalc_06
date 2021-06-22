import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TypeCalc } from '../models/enums/typeCalculator.model';
import dataCalc from '../repositories/data_repositories.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public home: string;
  public dataCalcList: {typeName: TypeCalc; url: string; icon: string; active: boolean}[] = dataCalc;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

}
