import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SeptimaPage } from './septima.page';
/*
describe('SeptimaPage', () => {
  let component: SeptimaPage;
  let fixture: ComponentFixture<SeptimaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SeptimaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
*/
// instalar npm test
describe('Septima pagina', () =>{
  let component : SeptimaPage;
  
  beforeEach(waitForAsync (() => {
    // crea la pagina previamente a la ejecución de las pruebas
    component = new SeptimaPage();  
  }));

  it('suma de 2 numeros', () => {
    expect(component.sumar(2,2)).toEqual(4);  
  })
  it('División de 2 numeros', ()=>
  {
    expect(component.dividir(2,2)).toEqual(1);
  })
  it('División por cero', ()=>
  {
    expect(component.dividir(2,0)).toEqual(0);
  })
})