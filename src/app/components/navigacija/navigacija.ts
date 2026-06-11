import { Component } from '@angular/core';
import { Korisnik } from '../../models/korisnik.model';
import { AutentifikacijaService } from '../../services/autentifikacija.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigacija',
  standalone: false, // Set to false to use the component in a non-standalone context
  templateUrl: './navigacija.html',
  styleUrl: './navigacija.scss',
})
export class NavigacijaComponent {

  trenutniKorisnik : Korisnik | null = null;

  constructor(
    public autentifikacijaService: AutentifikacijaService, // javno da može biti korišteno u template-u
    private router: Router
  ) {}

  ngOnInit() {
    this.trenutniKorisnik = this.autentifikacijaService.dajTrenutnogKorisnika();
  }


  

  onOdjava() {
    this.autentifikacijaService.odjava(); // briše korisnika iz varijable i iz localStorage. Nakon ovoga jePrijavljen() vraća false
    this.router.navigate(['/prijava']); //  šalje korisnika na login stranicu. Guard će sad blokirati pristup svim zaštićenim rutama jer jePrijavljen() vraća false.
  }
  

}
