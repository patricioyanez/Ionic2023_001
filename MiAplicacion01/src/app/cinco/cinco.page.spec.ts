import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CincoPage } from './cinco.page';

describe('CincoPage', () => {
  let component: CincoPage;
  let fixture: ComponentFixture<CincoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CincoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
