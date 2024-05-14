import { Component } from '@angular/core';
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
}
