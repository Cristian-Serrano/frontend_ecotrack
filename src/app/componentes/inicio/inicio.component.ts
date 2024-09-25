import { Component } from '@angular/core';
import { MainComponent } from './../main/main.component';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [MainComponent, RouterLink, RouterLinkActive],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.sass'
})
export class InicioComponent {

}
