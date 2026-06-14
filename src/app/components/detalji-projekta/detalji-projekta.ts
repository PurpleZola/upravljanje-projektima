import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjekatService } from '../../services/projekat.service';
import { ZadatakService } from '../../services/zadatak.service';
import { Projekat } from '../../models/projekat.model';
import { Zadatak, NAZIV_STATUSA, NAZIV_PRIORITETA } from '../../models/zadatak.model';


@Component({
  selector: 'app-detalji-projekta',
  templateUrl: './detalji-projekta.html',
  styleUrl: './detalji-projekta.scss',
  standalone: false
})
export class DetaljiProjektaComponent implements OnInit {

  projekat: Projekat | null = null; // čuva detalje učitanog projekta, počinje null dok podaci ne stignu
  zadaci: Zadatak[] = []; // čuva listu zadataka za projekat, počinje prazno dok podaci ne stignu
  filtriranZadaci: Zadatak[] = []; // čuva listu filtriranih zadataka, počinje prazno dok se ne primeni filter
  projekatId: number = 0; // čuva ID projekta koji se trenutno prikazuje, inicijalno 0 dok se ne učita iz rute

  filterStatus: number | string = '';
  filterPrioritet: number | string = '';


  NAZIV_STATUSA = NAZIV_STATUSA;
  NAZIV_PRIORITETA = NAZIV_PRIORITETA; // dodjeljujemo mape iz modela kao svojstva klase. 
  // Zašto? Jer u Angular templateu ne možeš pozivati uvezene konstante direktno 
  // — moraš ih izložiti kao svojstvo klase da bi template mogao pristupiti,

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
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
  this.projekatId = Number(this.route.snapshot.paramMap.get('id'));

  this.projekatService.getProjekatById(this.projekatId).subscribe(projekat => {
    this.projekat = projekat;
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

  izmeniZadatak(zadatakId: number) {
    this.router.navigate(['/projekti', this.projekatId, 'zadaci', zadatakId, 'izmeni']);
  }

  obrisiZadatak(zadatakId: number) {
    this.zadatakService.deleteZadatak(zadatakId).subscribe(() => {
      this.ucitajZadatke();
    });
  }

  nazadNaProjekte() {
    this.router.navigate(['/projekti']);
  }

}