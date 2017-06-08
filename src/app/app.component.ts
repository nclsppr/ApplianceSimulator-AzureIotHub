import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  appForm: FormGroup;
  post:any;                     // A property for our submitted form
  applianceId:string = '';

  constructor(private fb: FormBuilder) {

    this.appForm = fb.group({
      'applianceId' : [null, Validators.required],
      'validate' : ''
    });

  }

  onSumbit(post){
    this.applianceId = post.applianceId;
  }
  onReset(){
    this.applianceId = '';
  }
}
