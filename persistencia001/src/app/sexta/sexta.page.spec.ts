import { ComponentFixture, TestBed, async  } from '@angular/core/testing';
import { SextaPage } from './sexta.page';

describe('SextaPage', () => {
  let component: SextaPage;
  let fixture: ComponentFixture<SextaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SextaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
