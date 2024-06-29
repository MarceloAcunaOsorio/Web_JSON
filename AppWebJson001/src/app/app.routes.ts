import { Routes } from '@angular/router';
import { LoginComponent } from './componets/login/login.component';
import { RegistrarComponent } from './componets/registrar/registrar.component';
import { RompecabezaComponent } from './componets/rompecabeza/rompecabeza.component';
import { EstrategiaComponent } from './componets/estrategia/estrategia.component';
import { AventuraComponent } from './componets/aventura/aventura.component';
import { FamiliarComponent } from './componets/familiar/familiar.component';
import { HomeComponent } from './componets/home/home.component';

export const routes: Routes = [
    
    {path: 'login',component: LoginComponent},
    {path: 'registrar',component:RegistrarComponent},
    {path: 'rompecabeza', component: RompecabezaComponent},
    {path: 'estrategia', component:EstrategiaComponent},
    {path: 'aventura',component: AventuraComponent},
    {path: 'familiar',component: FamiliarComponent},
    {path: 'home',component: HomeComponent},
    {path: '**',redirectTo: 'home'}
];
