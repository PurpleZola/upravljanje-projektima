import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Zadatak } from '../models/zadatak.model';

@Injectable({
  providedIn: 'root'
})
export class ZadatakService {

  private apiUrl = 'http://localhost:3000/zadaci';

  constructor(private http: HttpClient) {}

  getZadaci() {
    return this.http.get<Zadatak[]>(this.apiUrl);
  }

  getZadaciByProjekatId(projektId: number) {
    return this.http.get<Zadatak[]>(`${this.apiUrl}?projektId=${projektId}`);
  }

  getZadatakById(id: number) {
    return this.http.get<Zadatak>(`${this.apiUrl}/${id}`);
  }

  createZadatak(zadatak: Omit<Zadatak, 'id'>) {
    return this.http.post<Zadatak>(this.apiUrl, zadatak);
  }

  updateZadatak(id: number, zadatak: Zadatak) {
    return this.http.put<Zadatak>(`${this.apiUrl}/${id}`, zadatak);
  }

  deleteZadatak(id: number) {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}