import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface Eleve {
  id: number;
  nom: string;
  prenom: string;
  telephone: string;
  role:string;
}

const ELEMENT_DATA: Eleve[] = [
  { id: 1, nom: 'Dupont', prenom: 'Jean', telephone: '620526545' ,role:"Superviseur"},
  { id: 2, nom: 'Martin', prenom: 'Marie', telephone: '620526545',role:"Utilisateur" },
  { id: 3, nom: 'Durand', prenom: 'Paul', telephone: '620526545' ,role:"Administrateur"},
  { id: 4, nom: 'Dubois', prenom: 'Lucie', telephone: '620526545',role:"Utilisateur" },
  { id: 5, nom: 'Moreau', prenom: 'Alice', telephone: '620526545' ,role:"Administrateur"},
  { id: 6, nom: 'Leroy', prenom: 'Antoine', telephone: '620526545',role:"Administrateur" },
  { id: 7, nom: 'Roux', prenom: 'Camille', telephone: '620526545' ,role:"Superviseur"},
  { id: 8, nom: 'Simon', prenom: 'Louis', telephone: '620526545' ,role:"Utilisateur"},
  { id: 9, nom: 'Michel', prenom: 'Chloe', telephone: '620526545' ,role:"Superviseur"},
  { id: 10, nom: 'Bernard', prenom: 'Leo', telephone: '620526545' ,role:"Superviseur"},
];

@Component({
  selector: 'app-liste-utilisateur',
  templateUrl: './liste-utilisateur.component.html',
  styleUrls: ['./liste-utilisateur.component.css']
})
export class ListeUtilisateurComponent implements AfterViewInit{

  displayedColumns: string[] = ['id', 'nom', 'prenom', 'telephone', 'role', 'action'];
  dataSource = new MatTableDataSource<Eleve>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  searchTerm: string = '';

  onSearch() {
    console.log("Terme de recherche :", this.searchTerm);
    // Ajoutez ici la logique de recherche pour filtrer les résultats
  }

  addData() {
   
  }

  removeData() {
 
  }


}
