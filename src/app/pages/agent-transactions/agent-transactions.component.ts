// agent-transactions.component.ts
import { Component } from '@angular/core';

interface Transaction {
  id: number;
  date: string;
  montant: number;
  type: string;
}

@Component({
  selector: 'app-agent-transactions',
  templateUrl: './agent-transactions.component.html',
  styleUrls: ['./agent-transactions.component.css']
})
export class AgentTransactionsComponent {
  transactions: Transaction[] = [
    { id: 1, date: '2024-10-01', montant: 100.000, type: 'Débit' },
    { id: 2, date: '2024-10-05', montant: 500.000, type: 'Crédit' },
    { id: 3, date: '2024-10-10', montant: 800.000, type: 'Débit' },
    { id: 4, date: '2024-10-15', montant: 60.000, type: 'Crédit' }
  ];
}
