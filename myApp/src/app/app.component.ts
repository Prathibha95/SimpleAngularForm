import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { User } from './user';
import { SubmitService } from './submit.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  userModel = new User('', '', '', 112536113, '');

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private submitService: SubmitService
  ) {
    this.initializeApp();
  }
  onSubmit() {
    this.submitService.submit(this.userModel)
    .subscribe(
      data => console.log('Success!', data),
      error => console.error('Error!', error)
    );
   }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
