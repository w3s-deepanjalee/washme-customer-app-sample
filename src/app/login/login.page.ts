import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Keyboard } from '@ionic-native/keyboard/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(public platform: Platform, public keyboard: Keyboard) {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.platform.ready().then(() => {
      this.keyboard.disableScroll(true);
    });
  }
}
