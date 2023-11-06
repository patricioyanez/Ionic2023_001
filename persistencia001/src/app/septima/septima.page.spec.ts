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
// https://www.youtube.com/watch?v=7E0tP7H550g&list=PLk2rufbc0DMqSIoJqCZdBfNYp9SGEMKam
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
  it('multiplicar numeros positivos', ()=>
  {
    expect(component.multiplicar(10,2)).toEqual(20);
  })
  it('multiplicar por 1 numero negativo', ()=>
  {
    expect(component.multiplicar(-10,2)).toBeLessThan(0);
  })
  it('multiplicar 2 numeros negativos', ()=>
  {
    expect(component.multiplicar(-10,-2)).toBeGreaterThanOrEqual(0);
  })
})