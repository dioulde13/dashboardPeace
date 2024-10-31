import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    // Vous pouvez ajouter ici la logique de validation ou d'authentification
    console.log("Redirection vers le tableau de bord");
    
    // Redirection vers la route du tableau de bord
    this.router.navigate(['/dashboard']);
  }
}
