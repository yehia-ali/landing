import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  @Input() title!: string;
  @Input() heading!: string;
  @Input() content!: string;
  @Input() imageUrl!: string;

}
