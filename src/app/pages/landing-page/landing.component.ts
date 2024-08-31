import { Component, inject } from '@angular/core';
import { GeneralService } from '../../core/services/general.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  private generalService = inject(GeneralService);

  allData: any = [];
  ngOnInit(): void {
    this.getAllData();
  }
  
  getAllData() {
    this.generalService.fetchData().subscribe(res => {
      this.allData = res;
      console.log('partners', this.allData)
    });
  }

}
