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

export interface Zadatak {
  id: number;
  projektId: number;
  opis: string;
  status: number;
  prioritet: number;
}