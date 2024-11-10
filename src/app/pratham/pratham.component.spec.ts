import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrathamComponent } from './pratham.component';

describe('PrathamComponent', () => {
  let component: PrathamComponent;
  let fixture: ComponentFixture<PrathamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrathamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrathamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
