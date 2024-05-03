import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechStackSvgComponent } from './tech-stack-svg.component';

describe('TechStackSvgComponent', () => {
  let component: TechStackSvgComponent;
  let fixture: ComponentFixture<TechStackSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechStackSvgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechStackSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
