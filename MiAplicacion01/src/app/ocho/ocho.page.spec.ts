import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OchoPage } from './ocho.page';

describe('OchoPage', () => {
  let component: OchoPage;
  let fixture: ComponentFixture<OchoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OchoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
