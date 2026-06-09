import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Korisnik } from '../models/korisnik.model';

@Injectable({
  providedIn: 'root'
})
export class AutentifikacijaService {

  private apiUrl = 'http://localhost:3000';
  private trenutniKorisnik: Korisnik | null = null;

  constructor(private http: HttpClient) {
    const sacuvani = localStorage.getItem('korisnik');
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
    localStorage.setItem('korisnik', JSON.stringify(korisnik));
  }

  odjava() {
    this.trenutniKorisnik = null;
    localStorage.removeItem('korisnik');
  }

  jePrijavljen(): boolean {
    return this.trenutniKorisnik !== null;
  }

  dajTrenutnogKorisnika(): Korisnik | null {
    return this.trenutniKorisnik;
  }
}