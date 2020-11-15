import { Component} from '@angular/core';
import { EstadoService } from '../servicos/estado.service';

@Component({
  selector: 'app-vetores',
  templateUrl: './vetores.component.html',
  styleUrls: ['./vetores.component.css']
})
export class VetoresComponent {

  constructor(private service: EstadoService){

  }
  adicionar(): void {
    this.service.adicionar();
  }

  excluir(i: number): void {
    this.service.excluir(i);
  }

  alterar(i: number): void {
    this.service.alterar(i);
  }
}
