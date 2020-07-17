import { SubmitService } from './submit.service';
import { User } from './user';
import { Component } from '@angular/core';
// import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'form';


  userModel = new User('', '', '', 1234567890, '');

  constructor(private submitService: SubmitService) {}
  onSubmit() {
   this.submitService.submit(this.userModel)
   .subscribe(
     data => {console.log('Success!', data);
              // this.toastr.successToastr('Enter Details Successfully', 'Success!');
    },
     error => console.error('Error!', error)
   );
  }
}
