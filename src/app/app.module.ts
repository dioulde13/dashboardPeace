import { NgModule } from '@angular/core'; // Import du décorateur @NgModule pour définir un module Angular
import { BrowserModule } from '@angular/platform-browser'; // Module nécessaire pour faire fonctionner l'application dans un navigateur

import { AppRoutingModule } from './app-routing.module'; // Module de gestion des routes de l'application
import { AppComponent } from './app.component'; // Composant principal de l'application
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Module pour gérer les animations dans l'application Angular
import { MatSlideToggleModule } from '@angular/material/slide-toggle'; // Module Angular Material pour le composant 'Slide Toggle'
import { MatCardModule } from '@angular/material/card'; // Module Angular Material pour les cartes (card layout)
import { MatGridListModule } from '@angular/material/grid-list'; // Module Angular Material pour la grille (grid layout)
import { HttpClientModule } from '@angular/common/http'; // Module pour effectuer des requêtes HTTP
import { ReactiveFormsModule } from '@angular/forms'; // Module pour créer et gérer des formulaires réactifs
import { MatTableModule } from '@angular/material/table'; // Module Angular Material pour afficher des tableaux de données
import { MatButtonModule } from '@angular/material/button'; // Module Angular Material pour les boutons
import { MatDialogModule } from '@angular/material/dialog'; // Module Angular Material pour les dialogues modaux
import { MatInputModule } from '@angular/material/input'; // Module Angular Material pour les champs de saisie (input)
import { MatPaginatorModule } from '@angular/material/paginator'; // Module Angular Material pour la pagination

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatExpansionModule} from "@angular/material/expansion";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { AgentsComponent } from './pages/agents/liste-agents/agents.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AjoutAgentComponent } from './pages/agents/ajout-agent/ajout-agent.component';
import { AjoutUtilisateurComponent } from './pages/utilisateurs/ajout-utilisateur/ajout-utilisateur.component';
import { ListeUtilisateurComponent } from './pages/utilisateurs/liste-utilisateur/liste-utilisateur.component';
import { ChartComponent } from './pages/chart/chart.component';
import { FormsModule } from '@angular/forms'; // Importer FormsModule
import { MatSelectModule } from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { ParamettreComponent } from './pages/paramettre/paramettre.component';
import { AgentInfoComponent } from './pages/agent-info/agent-info.component';
import { AgentTransactionsComponent } from './pages/agent-transactions/agent-transactions.component';
import { ConfirmerComponent } from './pages/confirmer/confirmer.component';



@NgModule({
  declarations: [
    // Liste des composants, directives et pipes déclarés dans ce module
    AppComponent, // Déclaration du composant principal
     AgentsComponent,
     TransactionsComponent,
     DashboardComponent,
     AjoutAgentComponent,
     AjoutUtilisateurComponent,
     ListeUtilisateurComponent,
     ChartComponent,
     LoginComponent,
     LayoutComponent,
     ParamettreComponent,
     AgentInfoComponent,
     AgentTransactionsComponent,
     ConfirmerComponent,
  ],
  imports: [
    MatCheckboxModule,
    MatMenuModule,
    MatSelectModule,
    FormsModule,
    MatExpansionModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    // Liste des modules importés pour être utilisés dans ce module
    MatSlideToggleModule, // Utilisation du module 'Slide Toggle' de Angular Material
    MatCardModule, // Utilisation des cartes de Angular Material
    BrowserModule, // Nécessaire pour que l'application fonctionne dans un navigateur
    MatTableModule, // Module pour les tableaux de Angular Material
    MatInputModule, // Module pour les champs de saisie de Angular Material
    MatDialogModule, // Module pour gérer les dialogues modaux
    MatPaginatorModule, // Module pour ajouter la pagination dans une table
    MatButtonModule, // Module pour les boutons de Angular Material
    HttpClientModule, // Utilisé pour effectuer des requêtes HTTP
    ReactiveFormsModule, // Utilisé pour gérer des formulaires réactifs
    MatGridListModule, // Utilisé pour les grilles de Angular Material
    AppRoutingModule, // Utilisé pour configurer le routing de l'application
    BrowserAnimationsModule, // Nécessaire pour utiliser les animations de Angular Material
    MatToolbarModule
  ],
  providers: [], // Liste des services injectables dans ce module (vide dans ce cas)
  bootstrap: [AppComponent] // Composant à démarrer au lancement de l'application
})
export class AppModule { }
