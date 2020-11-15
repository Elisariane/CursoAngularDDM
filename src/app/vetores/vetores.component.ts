import { Component} from '@angular/core';

@Component({
  selector: 'app-vetores',
  templateUrl: './vetores.component.html',
  styleUrls: ['./vetores.component.css']
})
export class VetoresComponent {

  nomes: string[] = ['Marcos', 'Maria', 'Joaquina'];
  // nomes2: Array<string> = ['Paula', 'Pedro', 'Pietro'];
  // nomes3 = new Array<string>('Marcos', 'Maria', 'Joaquina');
  // nomes4 = new Array<string>(15);

  nome: string = '';

  constructor(){

    // this.nomes.push('Kaká');
    // this.nomes.splice(0,1);

    // for( let nome of this.nomes){
    //   console.log(nome)
    // }

    // for (let i = 0; i < this.nomes2.length; i++) {
    //  console.log(this.nomes2[i]);

    // }
  }

  adicionar(): void {
    this.nomes.push(this.nome);
  }
}
