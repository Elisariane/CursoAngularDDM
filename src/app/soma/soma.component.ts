import { Component } from '@angular/core';

@Component({
  selector: 'app-soma',
  templateUrl: './soma.component.html',
  styleUrls: ['./soma.component.css']
})
export class SomaComponent {

  num1: number = 0;
  num2: number = 0;
  num3: number = 0;
  num4: number = 0;
  num5: number = 0;

  somar(): number {
    let total = Number(this.num1 + this.num2);
    alert(total)
    return total;
  }

  isPar(): any {
    if(Number(this.num3) % 2 === 0){
      alert('É par!');
    } else {
      alert('É ímpar');
    }
  }

  isPositivo(): any {
    if (Number(this.num4) >= 0) {
      alert('É positivo!');
    } else {
      alert('É negativo!');
    }
  }

  isParAndPositivo(): any {
    if (Number(this.num5) % 2 === 0 && Number(this.num5) >= 0) {
      alert('É par e positivo!');
    } else {
      alert('Não é par ou positivo!');
    }
  }
}
