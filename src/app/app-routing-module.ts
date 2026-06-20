import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutentifikacijaGuard } from './guards/autentifikacija-guard';
import { PrijavaComponent } from './components/prijava/prijava';
import { ListaProjekataComponent } from './components/lista-projekata/lista-projekata';
import { DetaljiProjektaComponent } from './components/detalji-projekta/detalji-projekta';
import { FormaZadatkaComponent } from './components/forma-zadatka/forma-zadatka';

const routes: Routes = [
  {
    path: 'prijava',
    component: PrijavaComponent
  },
  {
    path: 'projekti',
    component: ListaProjekataComponent,
    canActivate: [AutentifikacijaGuard] // niz jer se može dodati više guardova, svi moraju vratiti true da bi ruta bila aktivirana
  },
  {
    path: 'projekti/:id',
    component: DetaljiProjektaComponent,
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
    pathMatch: 'full' //Prazan URL localhost:4200 — šalje na /prijava. Mora biti zadnji u nizu ruta jer Angular čita 
    // rute odozgo prema dole i staje na prvom poklapanju. Ako bi bio prvi, sve rute bi se redirectovale na prijavu.

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }