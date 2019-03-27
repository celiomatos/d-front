import { Chart } from 'chart.js';
import { Component, OnInit } from '@angular/core';
import { TopFiveOrgaos } from '../../dto/top-five-orgaos.dto';
import { PagamentoService } from 'src/app/page/pagamento/shared/pagamento.service';

@Component({
  selector: 'der-top-five-orgaos',
  templateUrl: './top-five-orgaos.component.html',
  styleUrls: ['./top-five-orgaos.component.scss']
})
export class TopFiveOrgaosComponent implements OnInit {
  chartTopFiveOrgaos: [];
  topFiveOrgao: TopFiveOrgaos[] = [];
  dataChart: string[] = [];
  labelChart: string[] = [];
  constructor(private pagamentoService: PagamentoService) {}

  ngOnInit() {
    this.init();
    setTimeout(() => {
      this.initChart();
    }, 500);
  }

  init() {
    const today = new Date();
    const dateInicial = new Date(today.getFullYear(), 0, 1, 0, 0, 0);
    const dateFinal = new Date(today.getFullYear(), 11, 31, 23, 59, 59);
    this.findTopFiveOrgaos(dateInicial, dateFinal);
  }
  findTopFiveOrgaos(dateIinicial: Date, dateFinal: Date) {
    dateIinicial.setHours(0, 0, 0);
    dateFinal.setHours(23, 59, 59);
    this.pagamentoService.topFiveOrgaos(String(dateIinicial.getTime()), String(dateFinal.getTime())).subscribe(
      data => {
        this.topFiveOrgao = data;
        data.forEach(orgao => {
          this.dataChart.push(String(orgao.total));
          this.labelChart.push(orgao.sigla + '-' + orgao.orgao);
        });
      },
      error => {
        console.log(error);
      }
    );
  }

  initChart() {
    this.chartTopFiveOrgaos = new Chart('bar', {
      type: 'bar',
      data: {
        labels: this.labelChart,
        datasets: [
          {
            data: this.dataChart,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        tooltips: {
          callbacks: {
            title: function(tooltipItem: any, data: any) {
              const value = data['labels'][tooltipItem[0]['index']];
              return value.substring(value.indexOf('-') + 1);
            },
            label: function(tooltipItem: any) {
              return tooltipItem.yLabel.toLocaleString('pt-BR');
            }
          }
        },
        scales: {
          xAxes: [
            {
              ticks: {
                userCallback: function(value: any) {
                  return value.substring(0, value.indexOf('-'));
                }
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        },
        legend: {
          display: false
        }
      }
    });
  }
}
