import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmerComponent } from '../../confirmer/confirmer.component';



export interface Eleve {
  id: number;
  nom: string;
  prenom: string;
  telephone: string;
}

const ELEMENT_DATA: Eleve[] = [
  { id: 1, nom: 'Dupont', prenom: 'Jean', telephone: '620526545' },
  { id: 2, nom: 'Martin', prenom: 'Marie', telephone: '620526545' },
  { id: 3, nom: 'Durand', prenom: 'Paul', telephone: '620526545' },
  { id: 4, nom: 'Dubois', prenom: 'Lucie', telephone: '620526545' },
  { id: 5, nom: 'Moreau', prenom: 'Alice', telephone: '620526545' },
  { id: 6, nom: 'Leroy', prenom: 'Antoine', telephone: '620526545' },
  { id: 7, nom: 'Roux', prenom: 'Camille', telephone: '620526545' },
  { id: 8, nom: 'Simon', prenom: 'Louis', telephone: '620526545' },
  { id: 9, nom: 'Michel', prenom: 'Chloe', telephone: '620526545' },
  { id: 10, nom: 'Bernard', prenom: 'Leo', telephone: '620526545' },
];

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css']
})
export class AgentsComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'nom', 'prenom', 'telephone', 'action'];
  dataSource = new MatTableDataSource<Eleve>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private router: Router,public dialog: MatDialog) {}


  navigateToInfo(): void {
    this.router.navigate(['agents/info']);
  }

  navigateToTransaction(): void {
    this.router.navigate(['transactions/agent']);
  }

  // Méthode d'exportation en Excel
  exportExcel(): void {
    const worksheet = XLSX.utils.json_to_sheet(this.dataSource.data); // Convertit les données en feuille de calcul
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Élèves');

    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, 'Liste_Eleves');
  }

  // Enregistre le fichier Excel avec FileSaver
  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: 'application/octet-stream' });
    saveAs(data, `${fileName}.xlsx`);
  }

  startDate: string = '';
  endDate: string = '';

  onDateChange() {
    console.log("Date de début:", this.startDate, "Date de fin:", this.endDate);
    // Ajoutez ici la logique pour gérer la plage de dates
  }

  searchTerm: string = '';

  onSearch() {
    console.log("Terme de recherche :", this.searchTerm);
    // Ajoutez ici la logique de recherche pour filtrer les résultats
  }

  addData() {
    // Code pour ajouter des données
  }

  removeData() {
    // Code pour supprimer des données
  }

  onDetail(element: Eleve) {
    console.log('Détails de l\'élément', element);
  }

  onBloquer(element: Eleve) {
    console.log('Bloquer l\'élément', element);
  }

  onTransaction(element: Eleve) {
    console.log('Transaction pour l\'élément', element);
  }



  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmerComponent, {
      width: '400px'
    });
  }
}
