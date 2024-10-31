import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  constructor(private router: Router) {}

  onSubmit() {
    // Vous pouvez ajouter ici la logique de validation ou d'authentification
    console.log("Redirection vers le tableau de bord");
    
    // Redirection vers la route du tableau de bord
    this.router.navigate(['/login']);
  }

  pageProfil() { 
    // Redirection vers la route du tableau de bord
    this.router.navigate(['/profil']);
  }

}
