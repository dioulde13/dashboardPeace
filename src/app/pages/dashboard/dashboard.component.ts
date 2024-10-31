import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  cards = [
    { title: 'Nombre voitures', amount: '1000', icon: 'directions_car' },
    { title: 'Nombre camions', amount: '500', icon: 'local_shipping' },
    { title: 'Nombre motos', amount: '750', icon: 'two_wheeler' },
    { title: 'Nombre agents', amount: '200', icon: 'person' },
    { title: 'Total transaction jours', amount: '300', icon: 'attach_money' },
    { title: 'Total transaction', amount: '300', icon: 'account_balance_wallet' }
  ];
}
