import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleCardsComponent } from './style-cards.component';

describe('StyleCardsComponent', () => {
  let component: StyleCardsComponent;
  let fixture: ComponentFixture<StyleCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StyleCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StyleCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
