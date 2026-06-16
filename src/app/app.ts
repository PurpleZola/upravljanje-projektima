import { Component } from '@angular/core';
import { AutentifikacijaService } from './services/autentifikacija.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss',
})
export class App {
  constructor(public autentifikacijaService: AutentifikacijaService) {}
}