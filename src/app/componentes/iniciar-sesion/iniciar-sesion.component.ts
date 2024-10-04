import { Component } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-iniciar-sesion',
  standalone: true,
  imports: [],
  templateUrl: './iniciar-sesion.component.html',
  styleUrl: './iniciar-sesion.component.sass'
})
export class IniciarSesionComponent {
  constructor(private elRef: ElementRef){}

  ngOnInit() {
    this.elRef.nativeElement.parentElement.class("flex-grow-1");
  }
}
