import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';
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
        private appauth: AngularFireAuth) {
    }

    async register(user: user) {
        try {
            const result = await this.appauth.auth.createUserWithEmailAndPassword(user.email, user.password);
            console.log(result);
            this.navCtrl.push(LoginPage);
        } catch (e) {
            console.error(e);
        }
    }
}
