import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionSctionComponent } from './introduction-sction.component';

describe('IntroductionSctionComponent', () => {
  let component: IntroductionSctionComponent;
  let fixture: ComponentFixture<IntroductionSctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IntroductionSctionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IntroductionSctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
