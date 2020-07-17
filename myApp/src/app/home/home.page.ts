import { Component } from '@angular/core';
import { User } from '../user';
import { SubmitService } from '../submit.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  userModel = new User('', '', '', 112536113, '');
  constructor(private submitService: SubmitService) {}
  onSubmit() {
    console.log('hellow');
    this.submitService.submit(this.userModel)
    .subscribe(
      data => console.log('Success!', data),
      error => console.error('Error!', error)
    );
   }

}
