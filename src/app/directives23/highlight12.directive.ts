import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[highlight12]',
    standalone: true
})
export class Highlight12Directive {
    
    @Input() color23 = 'yellow'
    constructor(private el: ElementRef) { }

    @HostListener('mouseenter') 
    onMouseEnter() { this.highlight(this.color23); }

    @HostListener('mouseleave') 
    onMouseLeave() { this.highlight(''); }

    highlight(color: string) { this.el.nativeElement.style.backgroundColor = color; }
}