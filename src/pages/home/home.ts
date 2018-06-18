import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { GraficoPage } from "../grafico/grafico";



@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
})

export class HomePage {
    estados = null;
    constructor(public nav: NavController, public http: HttpClient) {
        this.http.get('../assets/data/estados.json').subscribe(data =>
        {
            this.estados = data;
        });
    }
    openEstadoGraficos(estado) {
        this.nav.push(GraficoPage, {
            estado: estado
        });
    }
}
