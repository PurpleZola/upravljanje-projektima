import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjekatService } from '../../services/projekat.service';
import { Projekat } from '../../models/projekat.model';

@Component({
  selector: 'app-lista-projekata',
  templateUrl: './lista-projekata.html',
  styleUrl: './lista-projekata.scss',
  standalone: false
})
export class ListaProjekataComponent implements OnInit {

  projekti: Projekat[] = [];
  ucitavanje: boolean = true;

  constructor(
    private projekatService: ProjekatService,
    private router: Router,
    private cdr: ChangeDetectorRef // service za rucno pokretanje detekcije promena u Angular-u
  ) {
    console.log('ListaProjekata konstruktor pokrenut');
  }

  ngOnInit() { // metoda koja se poziva kada se komponenta inicijalizuje
  this.ucitajProjekte();
  }

  
  ucitajProjekte() {
  this.ucitavanje = true;
  this.projekatService.getProjekti().subscribe(projekti => {
    setTimeout(() => {
      this.projekti = [...projekti];
      this.ucitavanje = false;
      this.cdr.detectChanges();
    }, 400);
  });
}

  otvoriDetalje(id: number) {
    this.router.navigate(['/projekti', id]);
  }

}