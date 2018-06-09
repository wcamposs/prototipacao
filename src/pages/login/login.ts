import { AlertController } from 'ionic-angular';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
    public navParams: NavParams, 
    private appauth: AngularFireAuth) {
  }

  async login(user: user) {

    this.appauth.auth.signInWithEmailAndPassword(user.email, user.password).then(data => {
      console.log('data', this.appauth.auth.currentUser);

      this.navCtrl.setRoot(TabsPage);

    }).catch(error => {
      alert('usuario ou senha invalidos');
      console.log('got an error', error);
    })

  }


  goRegister(){
    this.navCtrl.push(RegisterPage);
  }

}
