import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { LoginModal } from './shared/components/login-modal/login-modal';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    RouterOutlet, 
    LoginModal
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {

  // 🚀 Acciones de los botones
  iniciarDesdeCero() {
    console.log('Iniciar diseño desde cero');
    // luego aquí puedes navegar o abrir editor
  }

  usarPlantilla() {
    console.log('Usar plantilla');
  }

  explorar() {
    console.log('Explorar diseños');
  }

  mostrarLogin = false;

  abrirLogin() {
    this.mostrarLogin = true;
  }

  cerrarLogin() {
    this.mostrarLogin = false;
  }

}
