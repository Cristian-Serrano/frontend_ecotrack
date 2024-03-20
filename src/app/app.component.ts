import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarSuperiorComponent } from './componentes/navbar-superior/navbar-superior.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarSuperiorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'frontend_ecotrack';
}
