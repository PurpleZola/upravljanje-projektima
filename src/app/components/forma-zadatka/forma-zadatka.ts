import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ZadatakService } from '../../services/zadatak.service';
import { Zadatak } from '../../models/zadatak.model';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-forma-zadatka',
  templateUrl: './forma-zadatka.html',
  styleUrl: './forma-zadatka.scss',
  standalone: false
})
export class FormaZadatkaComponent implements OnInit {

  projekatId: number = 0;
  zadatakId: number | null = null;
  jeIzmena: boolean = false;

  opis: string = '';
  status: number = 0;
  prioritet: number = 0;

  statusOpcije = [
    { vrednost: 0, naziv: 'Novo' },
    { vrednost: 1, naziv: 'U toku' },
    { vrednost: 2, naziv: 'Završeno' }
  ];

  prioritetOpcije = [
    { vrednost: 0, naziv: 'Nizak' },
    { vrednost: 1, naziv: 'Srednji' },
    { vrednost: 2, naziv: 'Visok' }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private zadatakService: ZadatakService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.projekatId = Number(this.route.snapshot.paramMap.get('id'));
    const zadatakIdParam = this.route.snapshot.paramMap.get('zadatakId');

    if (zadatakIdParam) {
      this.zadatakId = Number(zadatakIdParam);
      this.jeIzmena = true;
      this.ucitajZadatak();
    }
  }

  ucitajZadatak() {
    this.zadatakService.getZadatakById(this.zadatakId!).subscribe(zadatak => {
      this.opis = zadatak.opis;
      this.status = zadatak.status;
      this.prioritet = zadatak.prioritet;
    });
  }

  onSacuvaj() {
  const zadatak: Omit<Zadatak, 'id'> = {
    projektId: this.projekatId,
    opis: this.opis,
    status: this.status,
    prioritet: this.prioritet
  };

  if (this.jeIzmena) {
    this.zadatakService.updateZadatak(this.zadatakId!, { id: this.zadatakId!, ...zadatak }).subscribe(() => {
      this.snackBar.open('Zadatak uspješno izmijenjen', 'Zatvori', { duration: 3000 });
      this.router.navigate(['/projekti', this.projekatId]);
    });
  } else {
    this.zadatakService.createZadatak(zadatak).subscribe(() => {
      this.snackBar.open('Zadatak uspješno dodat', 'Zatvori', { duration: 3000 });
      this.router.navigate(['/projekti', this.projekatId]);
    });
  }
}

  onOdustani() {
    this.router.navigate(['/projekti', this.projekatId]);
  }

}