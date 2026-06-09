import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutentifikacijaGuard } from './guards/autentifikacija-guard';

const routes: Routes = [
  {
    path: 'prijava',
    component: PrijavaComponent
  },
  {
    path: 'projekti',
    component: ListaProjekatComponent,
    canActivate: [AutentifikacijaGuard]
  },
  {
    path: 'projekti/:id',
    component: DetaljiProjekatComponent,
    canActivate: [AutentifikacijaGuard]
  },
  {
    path: 'projekti/:id/zadaci/novi',
    component: FormaZadatkaComponent,
    canActivate: [AutentifikacijaGuard]
  },
  {
    path: 'projekti/:id/zadaci/:zadatakId/izmeni',
    component: FormaZadatkaComponent,
    canActivate: [AutentifikacijaGuard]
  },
  {
    path: '',
    redirectTo: 'prijava',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }