import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from "@angular/common/http";
import { Chart } from 'chart.js';


@IonicPage()
@Component({
    selector: 'page-grafico',
    templateUrl: 'grafico.html',
})


export class GraficoPage {
    @ViewChild('populacao_total') populacao_total;
    @ViewChild('populacao_homens') populacao_homens;
    @ViewChild('populacao_mulheres') populacao_mulheres;

    estado: any;
    chartPopulacaoTotal: any;
    chartHomens: any;
    chartMulheres: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
        this.estado = navParams.get('estado');
    }


    chart(labels: any, label: string, data: any, element: any) {
        console.log(data);
        new Chart(element, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: label,
                    data: data,
                    borderWidth: 1,
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "rgba(75,192,192,0.4)",
                    borderColor: "rgba(75,192,192,1)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(75,192,192,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    spanGaps: false,
                }]
            },
        });
    }

    ionViewDidLoad() {
        this.http.get('../assets/data/'+this.estado.sigla+'.json').subscribe(response =>
        {
            let labels = [];
            let populacao_total = [];
            let populacao_homens = [];
            let populacao_mulheres = [];
            
            for (let i in response) {
                let info = response[i];
                labels.push(info.ano);
                populacao_total.push(info.populacao_total);
                populacao_homens.push(info.homens);
                populacao_mulheres.push(info.mulheres);
            }

            this.chartPopulacaoTotal = this.chart(labels, 'População total', populacao_total, this.populacao_total.nativeElement);
            this.chartHomens = this.chart(labels, 'População (homens)', populacao_homens, this.populacao_homens.nativeElement);
            this.chartMulheres = this.chart(labels, 'População (mulheres)', populacao_mulheres, this.populacao_mulheres.nativeElement);

        });
    }
}
