import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TresPage } from './tres.page';

describe('TresPage', () => {
  let component: TresPage;
  let fixture: ComponentFixture<TresPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
