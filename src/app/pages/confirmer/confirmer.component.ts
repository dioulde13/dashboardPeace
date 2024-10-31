import { Component } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';  // MAT_DIALOG_DATA pour injecter les données dans la modal
import { Inject } from '@angular/core';  // Inject pour injecter des dépendances
import { MatDialogRef } from '@angular/material/dialog';  // MatDialogRef pour gérer la modal

@Component({
  selector: 'app-confirmer',
  templateUrl: './confirmer.component.html',
  styleUrls: ['./confirmer.component.css']
})
export class ConfirmerComponent {

  constructor(
    public dialogRef: MatDialogRef<ConfirmerComponent>,  
  ) {}

}
