import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { TerceraPage } from './tercera.page';

describe('TerceraPage', () => {
  let component: TerceraPage;
  let fixture: ComponentFixture<TerceraPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TerceraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
