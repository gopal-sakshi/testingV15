import { Directive } from "@angular/core";
import { Border12Directive } from "./border12.directive";
import { Highlight12Directive } from "./highlight12.directive";

@Directive({
    selector: '[borderAndHighlight12]',

    // // APPROACH I
    // hostDirectives: [Highlight12Directive, Border12Directive],

    // APPROACH II 
    hostDirectives: [
        { directive: Highlight12Directive, inputs: ['color23: highlightColor23'] },
        { directive: Border12Directive, inputs: ['color24: borderColor24'] }
    ],
    standalone: true,
})
export class BorderAndHighlight12Directive {
  
}

// hostDirectives = 
    // specify an array of directives 
    // that we want our new component/directive to apply on a host element.