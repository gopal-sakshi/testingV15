import { Component } from '@angular/core';

@Component({
  selector: 'app-home-dom',
  templateUrl: './home-dom.component.html',
  styleUrls: ['./home-dom.component.scss']
})
export class HomeDomComponent {

  showDynamicComponent:boolean = false;
  
  constructor() { }
}
