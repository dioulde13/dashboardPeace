import { Component, ViewChild, AfterViewInit , Input} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

// export interface Eleve {
//   id: number;
//   nom: string;
//   montant: string;
// }

export interface Eleve {
  id: number;
  date: string;
  montant: number;
  status: string;
  type:string;
}

const ELEMENT_DATA: Eleve[] = [
  { id: 1, date: '2024-10-01', montant: 100000, type:'Voiture', status: 'Success' },
  { id: 2, date: '2024-10-05', montant: 500000,type:'Camion',  status: 'Warning' },
  { id: 3, date: '2024-10-10', montant: 80000, type:'Moto', status: 'Success' },
  { id: 4, date: '2024-10-15', montant: 900000,type:'Voiture',  status: 'Success' }
];

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements AfterViewInit {

  @Input() voiture: string = 'Voiture';
  isCheckedVoiture = false;

  onCheckboxChangeVoiture() {
    console.log('Checkbox voiture:', this.isCheckedVoiture);
  }


  @Input() moto: string = 'Moto';
  isCheckedMoto = false;

  onCheckboxChangeMoto() {
    console.log('Checkbox moto:', this.isCheckedMoto);
  }

  @Input() camion: string = 'Camion';
  isCheckedCamion = false;

  onCheckboxChangeCamion() {
    console.log('Checkbox camion:', this.isCheckedCamion);
  }
  

  displayedColumns: string[] = ['id', 'date','montant','type','status'];
  dataSource = new MatTableDataSource<Eleve>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  searchTerm: string = '';
  selectedOption: string = ''; // Variable pour stocker l'option sélectionnée

  // Définissez ici les options pour le champ de sélection
  options = [
    { value: 'voiture', viewValue: 'Voiture' },
    { value: 'moto', viewValue: 'Moto' },
    { value: 'camion', viewValue: 'Camion' },
  ];

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onSearch() {
    console.log("Terme de recherche :", this.searchTerm);
    // Ajoutez ici la logique de recherche pour filtrer les résultats
  }

  // Méthode pour gérer les changements de sélection
  onOptionChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedOption = selectElement.value;
    console.log("Option sélectionnée :", this.selectedOption);
    // Ajoutez ici la logique pour gérer les actions en fonction de l'option sélectionnée
  }

  addData() {
    // Logique pour ajouter des données
  }

  removeData() {
    // Logique pour supprimer des données
  }
}
