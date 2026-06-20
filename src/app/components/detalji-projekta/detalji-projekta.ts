import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjekatService } from '../../services/projekat.service';
import { ZadatakService } from '../../services/zadatak.service';
import { Projekat } from '../../models/projekat.model';
import { Zadatak, NAZIV_STATUSA, NAZIV_PRIORITETA } from '../../models/zadatak.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { PotvrdaBrisanjaComponent } from '../potvrda-brisanja/potvrda-brisanja';

@Component({
  selector: 'app-detalji-projekta',
  templateUrl: './detalji-projekta.html',
  styleUrl: './detalji-projekta.scss',
  standalone: false
})
export class DetaljiProjektaComponent implements OnInit {

  projekat: Projekat | null = null;  
  zadaci: Zadatak[] = []; // Svi zadaci povezani s projektom
  filtriranZadaci: Zadatak[] = [];
  projekatId: number = 0;

  filterStatus: number | string = '';
  filterPrioritet: number | string = '';
  ucitavanje: boolean = true;

  NAZIV_STATUSA = NAZIV_STATUSA;
  NAZIV_PRIORITETA = NAZIV_PRIORITETA;

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
    private projekatService: ProjekatService,
    private zadatakService: ZadatakService,
    private cdr: ChangeDetectorRef,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.projekatId = Number(this.route.snapshot.paramMap.get('id'));
    this.ucitavanje = true;

    this.projekatService.getProjekatById(this.projekatId).subscribe(projekat => {
      this.projekat = projekat;
      this.ucitavanje = false;
      this.cdr.detectChanges();
    });

    this.ucitajZadatke();
  }

  ucitajZadatke() {
    this.zadatakService.getZadaciByProjekatId(this.projekatId).subscribe(zadaci => {
      this.zadaci = zadaci;
      this.primijeniFilter();
      this.cdr.detectChanges();
    });
  }

  primijeniFilter() {
    this.filtriranZadaci = this.zadaci.filter(zadatak => {
      const statusOk = this.filterStatus === '' || zadatak.status === Number(this.filterStatus);
      const prioritetOk = this.filterPrioritet === '' || zadatak.prioritet === Number(this.filterPrioritet);
      return statusOk && prioritetOk;
    });
    this.cdr.detectChanges();
  }

  resetujFilter() {
    this.filterStatus = '';
    this.filterPrioritet = '';
    this.primijeniFilter();
  }

  dodajZadatak() {
    this.router.navigate(['/projekti', this.projekatId, 'zadaci', 'novi']);
  }

  izmeniZadatak(zadatakId: string) {
    this.router.navigate(['/projekti', this.projekatId, 'zadaci', zadatakId, 'izmeni']);
  }

  obrisiZadatak(zadatakId: string) {
    const dialogRef = this.dialog.open(PotvrdaBrisanjaComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(rezultat => {
      if (rezultat) {
        this.zadatakService.deleteZadatak(zadatakId).subscribe(() => {
          this.ucitajZadatke();
          this.snackBar.open('Zadatak uspješno obrisan', 'Zatvori', { duration: 3000 });
        });
      }
    });
  }

  dajStatistiku() {
    return {
      ukupno: this.zadaci.length,
      novo: this.zadaci.filter(z => z.status === 0).length,
      uToku: this.zadaci.filter(z => z.status === 1).length,
      zavrseno: this.zadaci.filter(z => z.status === 2).length
    };
  }

  nazadNaProjekte() {
    this.router.navigate(['/projekti']);
  }
}