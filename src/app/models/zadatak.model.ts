export const NAZIV_STATUSA: { [key: number]: string } = {
  0: 'Novo',
  1: 'U toku',
  2: 'Završeno'
};

export const NAZIV_PRIORITETA: { [key: number]: string } = {
  0: 'Nizak',
  1: 'Srednji',
  2: 'Visok'
};

// NAZIV_STATUSA i NAZIV_PRIORITETA — obični JavaScript objekti koji služe kao rječnik. Ključ je broj iz baze, vrijednost je tekst koji korisnik vidi. U templateu: {{ NAZIV_STATUSA[zadatak.status] }} — ako je status = 1, prikazuje "U toku".
// { [key: number]: string } — TypeScript sintaksa koja kaže "ključevi su brojevi, vrijednosti su stringovi".

export interface Zadatak {
  id: string;
  projektId: number;
  opis: string;
  status: number;
  prioritet: number;
}