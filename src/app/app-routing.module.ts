// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentsComponent } from './pages/agents/liste-agents/agents.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AjoutAgentComponent } from './pages/agents/ajout-agent/ajout-agent.component';
import { ListeUtilisateurComponent } from './pages/utilisateurs/liste-utilisateur/liste-utilisateur.component';
import { AjoutUtilisateurComponent } from './pages/utilisateurs/ajout-utilisateur/ajout-utilisateur.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { ParamettreComponent } from './pages/paramettre/paramettre.component';
import { AgentInfoComponent } from './pages/agent-info/agent-info.component';
import { AgentTransactionsComponent } from './pages/agent-transactions/agent-transactions.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'agents', component: AgentsComponent },
      { path: 'transactions', component: TransactionsComponent },
      { path: 'agents/ajout', component: AjoutAgentComponent },
      { path: 'agents/info', component: AgentInfoComponent },
      { path: 'transactions/agent', component: AgentTransactionsComponent },
      { path: 'ajout', component: AjoutAgentComponent },
      { path: 'listeUtilisateur', component: ListeUtilisateurComponent },
      { path: 'ajoutUtilisateur', component: AjoutUtilisateurComponent },
      { path: 'profil', component: ProfilComponent },
      { path: 'paramettre', component: ParamettreComponent },
      { path: 'listeUtilisateur/ajout', component: AjoutUtilisateurComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
