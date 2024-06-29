import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RompecabezaComponent } from './rompecabeza.component';

describe('RompecabezaComponent', () => {
  let component: RompecabezaComponent;
  let fixture: ComponentFixture<RompecabezaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RompecabezaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RompecabezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
