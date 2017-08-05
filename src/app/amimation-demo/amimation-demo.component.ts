import { Component, OnInit } from '@angular/core';
import {slideInOutAnimation } from '../header/menuToggle';
@Component({
  selector: 'app-amimation-demo',
  templateUrl: './amimation-demo.component.html',
  styleUrls: ['./amimation-demo.component.css'],
  animations :[slideInOutAnimation],
  host : {'[@slideInOutAnimation]':''}
})
export class AmimationDemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
