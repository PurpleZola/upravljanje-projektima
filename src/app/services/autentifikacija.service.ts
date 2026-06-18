import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Korisnik } from '../models/korisnik.model';

@Injectable({
  providedIn: 'root'
})
export class AutentifikacijaService {

  private apiUrl = 'http://localhost:3000'; // osnovni URL za vaš backend server
  private trenutniKorisnik: Korisnik | null = null;

  constructor(private http: HttpClient) {
    const sacuvani = sessionStorage.getItem('korisnik');
    if (sacuvani) {
      this.trenutniKorisnik = JSON.parse(sacuvani);
    }
  }

  prijava(korisnickoIme: string, lozinka: string) {
    return this.http.get<Korisnik[]>(
      `${this.apiUrl}/korisnici?korisnickoIme=${korisnickoIme}&lozinka=${lozinka}`
    );
  }

  postaviKorisnika(korisnik: Korisnik) {
  this.trenutniKorisnik = korisnik;
  sessionStorage.setItem('korisnik', JSON.stringify(korisnik)); // spremanje korisnika u sessionStorage
}

odjava() {
  this.trenutniKorisnik = null;
  sessionStorage.removeItem('korisnik'); // uklanjanje korisnika iz sessionStorage
}

  jePrijavljen(): boolean {
  return this.trenutniKorisnik !== null || localStorage.getItem('korisnik') !== null; // provjera da li je korisnik prijavljen
  }

  dajTrenutnogKorisnika(): Korisnik | null { // navigacija na stranicu profila ili prikaz korisničkih podataka
    return this.trenutniKorisnik;
  }
}