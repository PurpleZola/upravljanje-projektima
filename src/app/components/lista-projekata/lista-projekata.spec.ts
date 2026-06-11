import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProjekata } from './lista-projekata';

describe('ListaProjekata', () => {
  let component: ListaProjekata;
  let fixture: ComponentFixture<ListaProjekata>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaProjekata],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaProjekata);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
