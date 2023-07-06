import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-listado-datos',
  templateUrl: './listado-datos.component.html',
  styleUrls: ['./listado-datos.component.css']
})
export class ListadoDatosComponent {

  @Input() contactos: any[] = [];
}
