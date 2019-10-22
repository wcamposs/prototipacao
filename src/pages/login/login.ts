import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { TabsPage } from '../tabs/tabs';
import { AngularFireAuth } from 'angularfire2/auth';
import { user } from '../../models/user';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as user;


  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    private appauth: AngularFireAuth) {
  }

  async login(user: user) {

    this.appauth.auth.signInWithEmailAndPassword(user.email, user.password).then(data => {
      console.log('data', this.appauth.auth.currentUser);

      this.navCtrl.setRoot(TabsPage);

    }).catch(error => {
      const alert = this.alertCtrl.create({
        title: 'Erro!',
        subTitle: 'E-mail ou senha inválidos!',
        buttons: ['OK']
      });
      alert.present();
    })

  }


  goRegister(){
    this.navCtrl.push(RegisterPage);
  }

}
