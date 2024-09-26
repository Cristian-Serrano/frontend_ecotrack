import { Component } from '@angular/core';
import { MainComponent } from './../main/main.component';


@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [MainComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.sass'
})
export class InicioComponent {

}
