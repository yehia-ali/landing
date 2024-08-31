import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { IntroductionSctionComponent } from './components/introduction-sction/introduction-sction.component';
import { AboutComponent } from './components/about/about.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { CarouselModule } from 'primeng/carousel';
import { PartnersComponent } from './components/partners/partners.component';
import { MapComponent } from './components/map/map.component';


@NgModule({
  declarations: [
    LandingComponent,
    IntroductionSctionComponent,
    AboutComponent,
    BlogsComponent,
    PartnersComponent,
    MapComponent 

  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    CarouselModule,

  ],
  
})
export class LandingModule { }
