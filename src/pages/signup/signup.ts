// Default components
import { Component } from '@angular/core';

// Ionic components
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public menuCtrl: MenuController
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  menuToggle() {
    this.menuCtrl.open();
  }

}
