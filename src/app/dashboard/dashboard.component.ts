import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, RouterOutlet, NgClass],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  //Metodo - numero random
  getRandomInt(max: number): number {
    return Math.floor(Math.random() * max + 1);
  }
  // Método - número aleatorio para división
  getRandomIntForDivision(max: number, min: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  //Numeros aletoarios
  num1: number = this.getRandomInt(50);
  num2: number = this.getRandomInt(20);

  //obtener operacion del localStorage
  optionOperator: string = '';
  ngOnInit() {
    this.optionOperator = localStorage.getItem('sharedString') || '';
    this.realizarOperacion();
  }

  //Resultados correctos e incorrectos
  result: number = 0;
  fakeNumber: string = '0';
  fake: number = 0;

  op: string = this.optionOperator;

  //Respuesta Correcta ()
  realizarOperacion() {
    switch (this.optionOperator) {
      case '+':
        this.result = this.num1 + this.num2;
        this.fakeNumber = this.result.toString();
        this.fake = this.result + parseInt(this.fakeNumber[0], 10) || 0;
        break;

      case '-':
        this.result = this.num1 - this.num2;
        this.fakeNumber = this.result.toString();
        this.fake = this.result - parseInt(this.fakeNumber[0], 10) || 0;
        break;

      case '*':
        this.num1 = this.getRandomInt(10);
        this.num2 = this.getRandomInt(12);
        this.result = this.num1 * this.num2;
        this.fakeNumber = this.result.toString();
        this.fake = this.result + parseInt(this.fakeNumber[0], 10) || 0;
        break;

      case '/':
        this.num1 = this.getRandomIntForDivision(10, 100);
        this.num2 = this.getRandomIntForDivision(1, 10);
        this.result = parseFloat((this.num1 / this.num2).toFixed(1));
        this.fakeNumber = this.result.toString();
        this.fake = parseFloat((this.result + parseInt(this.fakeNumber[0], 10) || 0).toFixed(1));
        break;

      default:
        break;
    }
  }

  //Posicion y mensaje de opciones
  position: boolean = true;
  click: any;
  message: string = '';

  //funcion reload de ejercicios
  handleCorrectAnswer(click: boolean) {
    // Generar nuevos números aleatorios
    this.num1 = this.getRandomInt(50);
    this.num2 = this.getRandomInt(20);

    // Actualizar la respuesta correcta y la respuesta incorrecta
    this.realizarOperacion();

    // Intercambiar la posición de las opciones
    if (Math.random() > 0.5) {
      this.position = !this.position;
    }
    this.message = click ? 'Correcto!' : 'Incorrecto!';
  }
}
