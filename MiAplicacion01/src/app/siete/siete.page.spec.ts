import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SietePage } from './siete.page';

describe('SietePage', () => {
  let component: SietePage;
  let fixture: ComponentFixture<SietePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SietePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
