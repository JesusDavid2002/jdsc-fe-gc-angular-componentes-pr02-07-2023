import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  nombre: string = '';
  email: string = '';
  texto: string = '';
  validacion: number | string = '';

  contactos: any[] = [];

  // Si la validacion es 5 entonces introduce los datos del vector en el array
  enviar(): void{
    if (this.validacion == 5){
    let contactoNuevo ={
          'nombre': this.nombre,
          'email': this.email,
          'texto': this.texto,
        }
        this.contactos.push(contactoNuevo);
    }    
  }
}
