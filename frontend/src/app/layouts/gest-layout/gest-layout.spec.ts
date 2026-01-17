import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestLayout } from './gest-layout';

describe('GestLayout', () => {
  let component: GestLayout;
  let fixture: ComponentFixture<GestLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
