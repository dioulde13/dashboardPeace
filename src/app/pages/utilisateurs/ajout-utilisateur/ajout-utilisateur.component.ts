import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-ajout-utilisateur',
  templateUrl: './ajout-utilisateur.component.html',
  styleUrls: ['./ajout-utilisateur.component.css']
})
export class AjoutUtilisateurComponent implements OnInit{

  agentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.agentForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.agentForm.valid) {
      const agentData = this.agentForm.value;
      console.log("Données de l'agent :", agentData);
      // Ajoutez votre logique d'enregistrement ici
    }
  }

}
