import { Routes } from '@angular/router';
import { home } from './home/home';
import { contato } from './contato/contato';
import { perfil } from './perfil/perfil';
import { Somos } from './somos/somos';



export const routes: Routes = [
    {path:'home',component:home},
    {path:'contato',component:contato},
    {path:'perfil',component:perfil},
     {path:'somos',component:Somos},
   
   
];
