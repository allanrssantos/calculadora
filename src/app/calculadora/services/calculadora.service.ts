/**
 * SERVIÇO RESPONSÁVEL POR EXECUTAR OPERAÇÕES DE CALCULO DA
 * CALCULADORA
 *
 * @AUTOR Allan Santos<allansssoares@gmail.com>
 * @SINCE 1.0.0
 */
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  /*DEFINI AS CONTANTES UTILIZADAS
  PARA IDENTIFICAR AS OPERAÇÕES DE CÁLCULO*/

  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';

  constructor() { }
  /**MÉTODO QUE CALCULA UMA OPERÇÃO DADO
   * DOIS NUMEROS.
   * SUPORTA AS OPERAÇÕES SOMA, SUBTRAÇÃO, DIVISÃO E MULTIPLICAÇÃO.
   *
   * @PARAM NUM1 NUMBER
   * @PARAM NUM2 NUMBER
   * @PARAM OPERAÇÃO STRING OPERAÇÃO A SER EXECUTADA
   * @RETURN NUMBER RESULTADO DA OPERAÇÃO
   */
  calcular(num1: number, num2: number, operacao: string): number {
    let resultado: number; // ARMAZENA O RESULTADO DA OPERAÇÃO

    switch(operacao) {
      case CalculadoraService.SOMA:
        resultado = num1 + num2;
      break;
      case CalculadoraService.SUBTRACAO:
        resultado = num1 - num2;
      break;
      case CalculadoraService.DIVISAO:
        resultado = num1 / num2;
      break;
      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2;
      break;
      default:
        resultado = 0;
    }
    return resultado;
  }
}
