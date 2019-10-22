import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { GraficoPage } from "../grafico/grafico";



@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
})

export class HomePage {
    //Chama internamente os estados via http local
    estados = null;
    constructor(public nav: NavController, public http: HttpClient) {
        this.http.get('./assets/data/estados.json').subscribe(data =>
        {
            this.estados = data;
        });
    }
    //Função que redireciona para a pagina de gráficos dos respectivos estados
    openEstadoGraficos(estado) {
        this.nav.push(GraficoPage, {
            estado: estado
        });
    }
}
