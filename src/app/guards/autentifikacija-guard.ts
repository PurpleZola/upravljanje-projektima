import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AutentifikacijaService } from '../services/autentifikacija.service';

@Injectable({
  providedIn: 'root'
})
export class AutentifikacijaGuard implements CanActivate {

  constructor(
    private autentifikacijaService: AutentifikacijaService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (this.autentifikacijaService.jePrijavljen()) {
      return true;
    }
    this.router.navigate(['/prijava']);
    return false;
  }
}