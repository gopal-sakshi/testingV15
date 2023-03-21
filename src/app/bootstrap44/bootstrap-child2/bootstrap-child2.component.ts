import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  imports: [ CommonModule ],
  selector: 'app-bootstrap-child2',
  templateUrl: './bootstrap-child2.component.html',
  styleUrls: ['./bootstrap-child2.component.scss']
})
export class BootstrapChild2Component {
  @Input() input23:string = ''
}
