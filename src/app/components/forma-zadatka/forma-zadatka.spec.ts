import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaZadatka } from './forma-zadatka';

describe('FormaZadatka', () => {
  let component: FormaZadatka;
  let fixture: ComponentFixture<FormaZadatka>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormaZadatka],
    }).compileComponents();

    fixture = TestBed.createComponent(FormaZadatka);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
