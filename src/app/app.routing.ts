// Importar modulos del routing de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importamos los componentes
import { HomeComponent } from './home/home.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { CursosComponent } from './cursos/cursos.component';

//Array de rutas
const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'zapatillas', component: ZapatillasComponent },
    { path: 'videojuegos', component: VideojuegoComponent },
    { path: 'cursos', component: CursosComponent },
    { path: '**', component:  HomeComponent }
  ];


//Exportar el modulo rel router
export const appRoutingProviders:any[]=[];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes)