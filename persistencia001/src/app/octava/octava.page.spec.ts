import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OctavaPage } from './octava.page';

describe('OctavaPage', () => {
  let component: OctavaPage;
  let fixture: ComponentFixture<OctavaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OctavaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
