import { Component, Input } from '@angular/core';
import { Partners } from './partners.model';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.scss'
})
export class PartnersComponent {
  @Input() partners: Partners[] = [];
  @Input() smallTitle!: string;
  @Input() bigTitle!: string;

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
      numScroll: 5
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];
  
}
