import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
//import {BlueComponent} from './blue/blue.component';
import { BlueComponentNgFactory } from './blue/blue.component.ngfactory';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'factory-shim-repro';

  constructor(vcr: ViewContainerRef, cfr: ComponentFactoryResolver) {
    //vcr.createComponent(cfr.resolveComponentFactory(BlueComponent));
    vcr.createComponent(BlueComponentNgFactory);
  }
}
