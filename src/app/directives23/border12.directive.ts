
import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[border12]',
    standalone: true,
})
export class Border12Directive implements OnInit {
    @Input() color24: string = 'red';
    constructor(private el: ElementRef) {}

    ngOnInit() { this.border('') }

    @HostListener('mouseenter') 
    onMouseEnter() { this.border(this.color24); }

    @HostListener('mouseleave') 
    onMouseLeave() { this.border(''); }

    border(color: string) { this.el.nativeElement.style.border = `2px solid ${color || 'transparent'}`; }
}