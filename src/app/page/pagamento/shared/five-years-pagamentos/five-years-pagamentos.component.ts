import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { FiveYearsPagamento } from '../five-years-pagamento.model';
import { PagamentoService } from '../pagamento.service';

@Component({
  selector: 'der-five-years-pagamentos',
  templateUrl: './five-years-pagamentos.component.html',
  styleUrls: ['./five-years-pagamentos.component.scss']
})
export class FiveYearsPagamentosComponent implements OnInit {

  chartTopFive = [];
  dataChart: string[] = [];
  labelChart: string[] = [];
  topFive: FiveYearsPagamento[] = [];

  constructor(private pagamentoService: PagamentoService) { }

  ngOnInit() {
    this.init();
    setTimeout(() => {
      this.initChart();
    }, 2000);
  }

  init() {
    this.findFiveYears();
  }
  findFiveYears() {
    this.pagamentoService.fiveYears().subscribe(
      data => {
        this.topFive = data;
        data.forEach(dto => {
          this.dataChart.push(String(dto.total));
          this.labelChart.push(dto.ano);
        });
      },
      error => {
        console.log(error);
      }
    );
  }

  initChart() {
    this.chartTopFive = new Chart('years', {
      type: 'line',
      data: {
        labels: this.labelChart,
        datasets: [
          {
            data: this.dataChart,
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: ('rgba(255, 0, 0)'),
            borderWidth: 2
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        title: {
          display: false,
        },
        tooltips: {
          callbacks: {
            label: function (tooltipItem: any) {
              return tooltipItem.yLabel.toLocaleString('pt-BR');
            }
          }
        },
        scales: {
          xAxes: [
            {
              display: true
            }
          ],
          yAxes: [
            {
              display: true,
              ticks: {
                callback: function (value: number) {
                  return value.toLocaleString('pt-BR');
                }
              }
            }
          ]
        },
        plugins: {
          datalabels: {
            display: true,
            color: 'black',
            formatter: function (value: any) {
              return value.toFixed(2);
            }
          }
        }
      }
    });
  }
}
