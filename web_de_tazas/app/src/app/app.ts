import { Component } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatCardModule
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

}