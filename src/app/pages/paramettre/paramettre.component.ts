import { Component } from '@angular/core';

@Component({
  selector: 'app-paramettre',
  templateUrl: './paramettre.component.html',
  styleUrls: ['./paramettre.component.css']
})
export class ParamettreComponent {

  user = {
    name: '',
    email: '',
    password: ''
  };

  onSubmit() {
    // Logique de mise à jour du profil utilisateur
    console.log('Profil mis à jour:', this.user);
    // Appeler un service pour sauvegarder les modifications (par exemple)
  }

}
