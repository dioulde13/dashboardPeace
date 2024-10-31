import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent {

  constructor(private router: Router) {}

  // pageProfil() {
  //   // Vous pouvez ajouter ici la logique de validation ou d'authentification
  //   console.log("Redirection vers le tableau de bord");
    
  //   // Redirection vers la route du tableau de bord
  //   this.router.navigate(['/login']);
  // }

}
