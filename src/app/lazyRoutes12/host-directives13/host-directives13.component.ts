import { Component } from '@angular/core';
import { Border12Directive } from 'src/app/directives23/border12.directive';
import { Highlight12Directive } from 'src/app/directives23/highlight12.directive';

@Component({
  selector: 'app-host-directives13',
  templateUrl: './host-directives13.component.html',
  styleUrls: ['./host-directives13.component.scss'],
  hostDirectives: [
    Border12Directive,
    { directive: Highlight12Directive, inputs: ['color23: brown'], outputs: ['eventEmitted23'] } 
    // it seems, we cant give inputs, outputs at this moment... github issue is pending
  ],
  standalone: true
})
export class HostDirectives13Component {

  constructor(public highlight: Highlight12Directive,
    public border: Border12Directive) {}

  ngOnInit() {
    // here we can give inputs -------> but not in "hostDirectives" property
    this.highlight.color23 = 'grey';
    this.border.color24 = 'black';    
  }

  eventEmitted23(event:any) {
    console.log("event emitted rcvd @ component ", event);
  }

}
