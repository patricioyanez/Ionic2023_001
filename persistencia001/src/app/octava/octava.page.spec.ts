import { ComponentFixture, TestBed, fakeAsync, tick, waitForAsync } from '@angular/core/testing';
import { OctavaPage } from './octava.page';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';

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

describe("====== prueba formulario octava",()=>{
  let component : OctavaPage;
  let fixture : ComponentFixture<OctavaPage>;

  beforeEach(waitForAsync(async()=>
  {
    await TestBed.configureTestingModule({
      declarations: [OctavaPage],
      imports: [IonicModule.forRoot(), FormsModule, RouterTestingModule]
    }).compileComponents();
    fixture = TestBed.createComponent(OctavaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }))

  it('_____Boton Sumar', fakeAsync(()=>{
    fixture.componentInstance.n1 = 3;
    fixture.componentInstance.n2 = 3;
    document.getElementById('btnSumar')?.click(); // "hace un clic"
    fixture.detectChanges();
    tick();
    // lee el input donde muestra el resultado
    const resultado = (<HTMLInputElement>document.getElementById('res')).value;
    expect(resultado).toContain('6');
  }))
});