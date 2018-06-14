import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {EstadosPage} from "../estados/estados";


@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
})

export class HomePage {

    items = [];

    constructor(public nav: NavController) {
        this.items = [
            {
                'id': 'uf',
                'title': 'Estado',
                'icon': 'arrow-forward',
                'description': 'Encontre projeções para cada estado',
                'color': '#000000'
            },{
                'id': 'regioes',
                'title': 'Regiões',
                'icon': 'arrow-forward',
                'description': 'Encontre projeções para cada região',
                'color': '#000000'
            },
            {
                'id': 'mesorregioes',
                'title': 'Mesorregiões',
                'icon': 'arrow-forward',
                'description': 'Encontre projeções para cada mesoregião',
                'color': '#000000'
            },
            {
                'id': 'microrregioes',
                'title': 'Microrregião',
                'icon': 'arrow-forward',
                'description': 'Encontre projeções para cada microrregião',
                'color': '#000000'
            },
        ]
    }

    openNavDetailsPage(item) {
        this.nav.push(EstadosPage, { item: item });
    }

    ionViewDidLoad() {

    }
}
