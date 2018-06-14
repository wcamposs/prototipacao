import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HTTP} from "@ionic-native/http";


@IonicPage()
@Component({
    selector: 'page-estados',
    templateUrl: 'estados.html',
})

export class EstadosPage {
    estados = [];
    constructor(public navCtrl: NavController, public navParams: NavParams, public http: HTTP) {
        this.http.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados', {}, {})
        .then(result => {
            let response_data = JSON.parse(result.data);
            for (let estado of response_data){
                this.estados.push(estado);
            }
        })
        .catch(error => {
            console.log(error.status);
            console.log(error.error); // error message as string
            console.log(error.headers);
        });
    }

    openEstado(estado) {
        console.log(estado);
    }

    ionViewDidLoad() {
        
        console.log(this.estados);
    }

}
