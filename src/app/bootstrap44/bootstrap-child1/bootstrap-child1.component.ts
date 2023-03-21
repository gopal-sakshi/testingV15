import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [ CommonModule ],
  selector: 'app-bootstrap-child1',
  templateUrl: './bootstrap-child1.component.html',
  styleUrls: ['./bootstrap-child1.component.scss']
})
export class BootstrapChild1Component {
  items:any[] = [
    { name: 'tv', price: 40000 },
    { name: 'mobile', price: 12000 },
    { name: 'washing machine', price: 18000 }
  ]
}
