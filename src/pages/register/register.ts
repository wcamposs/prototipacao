import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';
import { user } from '../../models/user';

@IonicPage()
@Component({
    selector: 'page-register',
    templateUrl: 'register.html',
})
export class RegisterPage {

    user = {} as user;

    constructor(
        public navCtrl: NavController,
        public alertCtrl: AlertController,
        private appauth: AngularFireAuth) {
    }

    async register(user: user) {
        try {
            const result = await this.appauth.auth.createUserWithEmailAndPassword(user.email, user.password);
            console.log(result);
            this.navCtrl.push(HomePage);
        } catch (error) {
                const alert = this.alertCtrl.create({
                  title: 'Erro!',
                  subTitle: 'Seu login deve ser um email! \n \n Sua senha deve ter no mínimo 6 caracteres!',
                  buttons: ['OK']
                });
                alert.present();
        }
    }
}
