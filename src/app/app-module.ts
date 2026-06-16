import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { PrijavaComponent } from './components/prijava/prijava';
import { NavigacijaComponent } from './components/navigacija/navigacija';
import { ListaProjekataComponent } from './components/lista-projekata/lista-projekata';
import { DetaljiProjektaComponent } from './components/detalji-projekta/detalji-projekta';
import { FormaZadatkaComponent } from './components/forma-zadatka/forma-zadatka';
import { RouterModule } from '@angular/router';
import { PotvrdaBrisanjaComponent } from './components/potvrda-brisanja/potvrda-brisanja';

@NgModule({
  declarations: [
    App,
    PrijavaComponent,
    NavigacijaComponent,
    ListaProjekataComponent,
    DetaljiProjektaComponent,
    FormaZadatkaComponent,
    PotvrdaBrisanjaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    MatSelectModule,
    MatChipsModule,
    CommonModule,
    MatSnackBarModule,
    MatDialogModule,
  ],
  providers: [provideHttpClient(), provideAnimationsAsync()],
  bootstrap: [App],
})
export class AppModule {}
