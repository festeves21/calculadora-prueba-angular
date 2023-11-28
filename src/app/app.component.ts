import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculadora-app';
  titulo= 'Aplicacion Calculadora';

  operandoA: number = 5;
  operandoB: number = 3;
  resultado: number = 0;

  sumar():void{
    console.log('paso');
    this.resultado = this.operandoA + this.operandoB
  }

}
