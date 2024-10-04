import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarSuperiorComponent } from './componentes/navbar-superior/navbar-superior.component';
import { NavbarInferiorComponent } from './componentes/navbar-inferior/navbar-inferior.component';
import { MainComponent } from './componentes/main/main.component';
import { FooterComponent } from './componentes/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarSuperiorComponent, NavbarInferiorComponent, MainComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'frontend_ecotrack';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  // El elemento encima del footer tendrá la clase flex-grow-1
  ngOnInit() {
    // Selecciona el elemento actual
    const elemento = this.el.nativeElement.querySelector('router-outlet');
    
    // Verifica que el elemento exista
    if (elemento) {
      // Selecciona el siguiente hermano elemento
      const siguienteHermanoElemento = elemento.nextElementSibling;
      
      // Verifica que el siguiente hermano exista
      if (siguienteHermanoElemento) {
        // Agrega la clase al siguiente hermano
        this.renderer.addClass(siguienteHermanoElemento, 'flex-grow-1');
      } else {
        console.error('No se encontró el siguiente hermano');
      }
    } else {
      console.error('Elemento no encontrado');
    }
  }
}
