import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuintalistadoPage } from './quintalistado.page';

describe('QuintalistadoPage', () => {
  let component: QuintalistadoPage;
  let fixture: ComponentFixture<QuintalistadoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(QuintalistadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
