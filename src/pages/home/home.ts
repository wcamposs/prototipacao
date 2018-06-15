import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HTTP } from "@ionic-native/http";



@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
})

export class HomePage {

    items = [];

    constructor(public nav: NavController, public http: HTTP) {
        this.http.get('https://api.coindesk.com/v1/bpi/historical/close.json?start=2010-07-17&end=2018-06-14', {}, {})
            .then(result => {
                let response_data = JSON.parse(result.data);
                console.log(response_data);
                for (let price of response_data.bpi){
                    this.items.push(price);
                    console.log
                }
            })
    }

    openNavDetailsPage(item) {
        // this.nav.push(EstadosPage, { item: item });
        console.log(this.items);
    }

    ionViewDidLoad() {

    }
}
