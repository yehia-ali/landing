import { Component, Input } from '@angular/core';
import { Blog } from './blogs.model';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss',
})
export class BlogsComponent {
  @Input() blogs: Blog[] = [];
  @Input() smallTitle!: string;
  @Input() bigTitle!: string;
  @Input() numVisible: number =3;
  @Input() numScroll: number =3;
  @Input() circular: boolean =true;


  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
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
