import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
    selector: '[highlight12]',
    standalone: true
})
export class Highlight12Directive {
    
    @Input() color23 = 'yellow';
    @Output() eventEmitted23 = new EventEmitter<any>;
    
    constructor(private el: ElementRef) { }

    @HostListener('mouseenter') 
    onMouseEnter() { this.highlight(this.color23); }

    @HostListener('mouseleave') 
    onMouseLeave() { this.highlight(''); 
        this.eventEmitted23.emit({info: 'mouse out of focus area23'});
    }

    highlight(color: string) { this.el.nativeElement.style.backgroundColor = color; }

}