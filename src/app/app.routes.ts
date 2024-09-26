import { Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { CalcularEmisionesComponent } from './componentes/calcular-emisiones/calcular-emisiones.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';

export const routes: Routes = [
    {path:'inicio', component: InicioComponent},
    {path:'calcular-emisiones', component: CalcularEmisionesComponent},
    {path:'iniciar-sesion', component: IniciarSesionComponent},
    {path:'**', pathMatch:'full', redirectTo: 'inicio'}
];
