import { Component } from '@angular/core';
import { Border12Directive } from 'src/app/directives23/border12.directive';
import { BorderAndHighlight12Directive } from 'src/app/directives23/borderAndHighlight12.directive';
import { Highlight12Directive } from 'src/app/directives23/highlight12.directive';

@Component({
  selector: 'app-host-directives12',
  templateUrl: './host-directives12.component.html',
  styleUrls: ['./host-directives12.component.scss'],
  standalone:true,
  imports: [ Highlight12Directive, Border12Directive, BorderAndHighlight12Directive]
})
export class HostDirectives12Component {

}
