import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnoPage } from './uno.page';

describe('UnoPage', () => {
  let component: UnoPage;
  let fixture: ComponentFixture<UnoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
