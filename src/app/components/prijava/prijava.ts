import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutentifikacijaService } from '../../services/autentifikacija.service';

@Component({
  selector: 'app-prijava',
  templateUrl: './prijava.html',
  styleUrl: './prijava.scss',
  standalone: false
})
export class PrijavaComponent {

  korisnickoIme: string = '';
  lozinka: string = '';
  greskaLogin: string = '';

  constructor(
    private autentifikacijaService: AutentifikacijaService,
    private router: Router
  ) {}

  onPrijava() {
    this.autentifikacijaService.prijava(this.korisnickoIme, this.lozinka).subscribe(korisnici => {
      if (korisnici.length > 0) {
        this.autentifikacijaService.postaviKorisnika(korisnici[0]);
        this.router.navigate(['/projekti']);
      } else {
        this.greskaLogin = 'Pogrešno korisničko ime ili lozinka';
      }
    });
  }
}