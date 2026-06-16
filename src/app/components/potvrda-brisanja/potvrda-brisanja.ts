import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-potvrda-brisanja',
  templateUrl: './potvrda-brisanja.html',
  styleUrl: './potvrda-brisanja.scss',
  standalone: false
})
export class PotvrdaBrisanjaComponent {

  constructor(private dialogRef: MatDialogRef<PotvrdaBrisanjaComponent>) {} 

  onPotvrdi() {
    this.dialogRef.close(true);
  }

  onOdustani() {
    this.dialogRef.close(false);
  }

}