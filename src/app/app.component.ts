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
