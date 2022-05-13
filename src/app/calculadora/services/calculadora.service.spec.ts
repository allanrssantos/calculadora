import { TestBed, inject } from '@angular/core/testing';


import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  })
  it('deve garantir que 1 + 4 = 5'),
  inject([CalculadoraService], (service: CalculadoraService) => {
    let soma = service.calcular(1, 4, CalculadoraService.SOMA);
    expect(soma).toEqual(5);
  });
  it('deve garantir que 1 - 4 = -3'),
  inject([CalculadoraService], (service: CalculadoraService) => {
    let SUBTRACAO = service.calcular(1, 4, CalculadoraService.SUBTRACAO);
    expect(SUBTRACAO).toEqual(-3);
  });
  it('deve garantir que 1 / 4 = 0.25'),
  inject([CalculadoraService], (service: CalculadoraService) => {
    let DIVISAO = service.calcular(1, 4, CalculadoraService.DIVISAO);
    expect(DIVISAO).toEqual(5);
  });
  it('deve garantir que 1 * 4 = 1'),
  inject([CalculadoraService], (service: CalculadoraService) => {
    let MULTIPLICACAO = service.calcular(1, 4, CalculadoraService.MULTIPLICACAO);
    expect(MULTIPLICACAO).toEqual(5);
  });
});
