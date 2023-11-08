import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { OctavaPage } from './octava.page';
import { IonicModule } from '@ionic/angular';

/*
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
*/

/* npm test / npm t */

describe('Pagina sumadora',()=>{
  let component: OctavaPage;
  let fixture: ComponentFixture<OctavaPage>;

  beforeEach(waitForAsync( async()=>{
    await TestBed.configureTestingModule({
      declarations: [OctavaPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();
    
    fixture = TestBed.createComponent(OctavaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
})