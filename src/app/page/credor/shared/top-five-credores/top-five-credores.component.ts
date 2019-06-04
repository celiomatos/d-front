import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { CredorService } from '../credor.service';
import { TopFiveCredores } from '../top-five-credores.model';

@Component({
  selector: 'der-top-five-credores',
  templateUrl: './top-five-credores.component.html',
  styleUrls: ['./top-five-credores.component.scss']
})
export class TopFiveCredoresComponent implements OnInit {

  chartTopFive = [];
  dataChart: string[] = [];
  labelChart: string[] = [];
  topFive: TopFiveCredores[] = [];

  constructor(private credorService: CredorService) { }

  ngOnInit() {
    this.init();
    setTimeout(() => {
      this.initChart();
    }, 2000);
  }

  init() {
    const today = new Date();
    const dateInicial = new Date(today.getFullYear(), 0, 1, 0, 0, 0);
    const dateFinal = new Date(today.getFullYear(), 11, 31, 23, 59, 59);
    this.findTopFive(dateInicial, dateFinal);
  }
  findTopFive(dateIinicial: Date, dateFinal: Date) {
    this.credorService.topFive(String(dateIinicial.getTime()), String(dateFinal.getTime())).subscribe(
      data => {
        this.topFive = data;
        data.forEach(dto => {
          this.dataChart.push(String(dto.total));
          this.labelChart.push(dto.credor);
        });
      },
      error => {
        console.log(error);
      }
    );
  }

  initChart() {
    this.chartTopFive = new Chart('pie', {
      type: 'pie',
      data: {
        labels: this.labelChart,
        datasets: [
          {
            data: this.dataChart,
            backgroundColor: [
              'rgba(255, 99, 132)',
              'rgba(54, 162, 235)',
              'rgba(255, 206, 86)',
              'rgba(75, 192, 192)',
              'rgba(153, 102, 255)'],
            borderWidth: 2
          }
        ]
      },
      options: {
        legend: {
          display: true,
          position: 'right'
        },
        title: {
          display: false,
        },
        scales: {
          xAxes: [
            {
              display: false
            }
          ],
          yAxes: [
            {
              display: false
            }
          ]
        }
      }
    });
  }
}
