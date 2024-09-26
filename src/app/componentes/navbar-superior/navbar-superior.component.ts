import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar-superior',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar-superior.component.html',
  styleUrl: './navbar-superior.component.sass'
})
export class NavbarSuperiorComponent {
  clickIniciarSesion(){

  }
  clickRegistrarse(){
    
  }
}
