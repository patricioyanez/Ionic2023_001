import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeisPage } from './seis.page';

describe('SeisPage', () => {
  let component: SeisPage;
  let fixture: ComponentFixture<SeisPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SeisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
