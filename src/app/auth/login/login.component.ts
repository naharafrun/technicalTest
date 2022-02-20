import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ToastrModule, ToastrService} from "ngx-toastr";
import {NotificationService} from "../../services/notification.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};

  constructor(private router: Router,
              private notificationService: NotificationService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.model.userName = 'abc';
    this.model.studentId = 'abc-12';
  }
  signIn() {
    if (this.model.userName == "" || this.model.userName == undefined) {
      this.notificationService.showWarning('please input the login id', 'Authentication Failed');
      return;
    }
    if (this.model.studentId == "" || this.model.studentId == undefined) {
      this.notificationService.showWarning('please input the password', 'Authentication Failed');
      return;
    } else {
      this.router.navigate(['/examinee']);
    }


  }

  getForm  ( ) {

  }
}
