import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-introduction-sction',
  templateUrl: './introduction-sction.component.html',
  styleUrl: './introduction-sction.component.scss',
})
export class IntroductionSctionComponent {
  @Input() smallTitle!: string;
  @Input() bigTitle!: string;

}
