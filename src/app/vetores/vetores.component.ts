import { Component} from '@angular/core';
import { Estado } from '../entidades/estado';
import { EstadoService } from '../servicos/estado.service';

@Component({
  selector: 'app-vetores',
  templateUrl: './vetores.component.html',
  styleUrls: ['./vetores.component.css']
})
export class VetoresComponent {

  service: EstadoService = new EstadoService()

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
