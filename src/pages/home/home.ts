import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';




@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
})

export class HomePage {

    estados = [];

    constructor(public nav: NavController, public http: HttpClient) {
        this.http.get('../assets/data/estados.json').subscribe(data =>
        {
            this.estados = data;
        });
    }

    openEstadoGraficos(estado) {
        console.log(estado);
    }
}
