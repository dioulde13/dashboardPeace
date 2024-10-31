import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  @ViewChild('myChart', { static: true }) chartRef!: ElementRef<HTMLCanvasElement>; // Référence au canvas
  chart: Chart | undefined;
  startDate: string = ''; // Date de début
  endDate: string = ''; // Date de fin
  data = [12, 19, 3, 5, 2, 3, 7]; // Données d'origine
  labels = ['2024-01-01', '2024-02-01', '2024-03-01', '2024-04-01', '2024-05-01', '2024-06-01', '2024-07-01']; // Étiquettes des données

  ngOnInit(): void {
    Chart.register(...registerables); // Enregistre les composants de Chart.js
    this.updateChart(); // Appelle la méthode pour afficher le graphique initial
  }

  updateChart(event?: Event): void {
    if (event) {
      this.startDate = (document.getElementById('startDate') as HTMLInputElement).value;
      this.endDate = (document.getElementById('endDate') as HTMLInputElement).value;
    }
  
    const filteredData = this.filterDataByDate(this.startDate, this.endDate);
    
    if (this.chart) {
      this.chart.destroy(); // Détruit l'ancien graphique
    }
    
    const context = this.chartRef.nativeElement.getContext('2d'); // Récupère le contexte du canvas
    if (context) {
      this.chart = new Chart(context, {
        type: 'bar',
        data: {
          labels: filteredData.labels,
          datasets: [{
            label: 'Ventes',
            data: filteredData.data,
            backgroundColor: '#0d6efd',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    } else {
      console.error("Impossible de récupérer le contexte du canevas.");
    }
  }
  

  filterDataByDate(start: string, end: string): { data: number[], labels: string[] } {
    const allData = [
      { date: '2024-01-01', value: 12 },
      { date: '2024-02-01', value: 19 },
      { date: '2024-03-01', value: 3 },
      { date: '2024-04-01', value: 5 },
      { date: '2024-05-01', value: 2 },
      { date: '2024-06-01', value: 3 },
      { date: '2024-07-01', value: 7 }
    ];

    const filtered = allData.filter(item => {
      return (!start || item.date >= start) && (!end || item.date <= end);
    });

    return {
      data: filtered.map(item => item.value),
      labels: filtered.map(item => item.date)
    };
  }
}
