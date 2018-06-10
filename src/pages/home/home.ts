import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

export class NavigationDetailsPage {
  item;

  constructor(params: NavParams) {
    if (params.data.item.id == 'estados') {
      this.http.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados', {}, {})
  .then(data => {

    console.log(data.status);
    console.log(data.data); // data received by server
    console.log(data.headers);

  })
  .catch(error => {

    console.log(error.status);
    console.log(error.error); // error message as string
    console.log(error.headers);

  });
    }
    this.item = params.data.item;
  }
}

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
    this.nav.push(NavigationDetailsPage, { item: item });
  }

  ionViewDidLoad() {

  }
}
