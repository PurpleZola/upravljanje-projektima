import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Projekat } from '../modeli/projekat.model';

@Injectable({
  providedIn: 'root'
})
export class ProjekatService {

  private apiUrl = 'http://localhost:3000/projekti';

  constructor(private http: HttpClient) {}

  getProjekti() {
    return this.http.get<Projekat[]>(this.apiUrl);
  }

  getProjekatById(id: number) {
    return this.http.get<Projekat>(`${this.apiUrl}/${id}`);
  }
}