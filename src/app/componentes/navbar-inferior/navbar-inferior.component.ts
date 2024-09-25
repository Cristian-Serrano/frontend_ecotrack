import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar-inferior',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar-inferior.component.html',
  styleUrl: './navbar-inferior.component.sass'
})
export class NavbarInferiorComponent {

}
