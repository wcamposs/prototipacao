import { AboutPage } from '../about/about';
import { AlertController } from 'ionic-angular';
import { Component } from '@angular/core';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { NavController,App } from 'ionic-angular';
import { LoginPage } from '../login/login';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor(public navCtrl: NavController, public app: App, private alertCtrl: AlertController) {

  }
  
  logout() {
    this.navCtrl.popToRoot();

    let alert = this.alertCtrl.create({
      title: 'Logout',
      message: 'Deseja realmente sair?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            // cancelado
          }
        },
        {
          text: 'Sim, sair!',
          handler: () => {
            this.app.getRootNav().setRoot(LoginPage);
          }
        }
      ]
    });
    alert.present();
  }
}
