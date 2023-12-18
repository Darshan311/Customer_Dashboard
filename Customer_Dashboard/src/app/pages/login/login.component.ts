import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  show: boolean = false;
  loginForm: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"), Validators.required]),
      password: new FormControl('')
    });
  }

  login() {
    if (this.loginForm.valid)
      console.log("value", this.loginForm.value);
    let user = { email: this.loginForm.email, password: this.loginForm.password };
    sessionStorage.setItem("user", JSON.stringify(user));
    this.router.navigate(['/dashboard']);
    this.clear();
  }

  clear() {
    this.loginForm.email = "";
    this.loginForm.password = "";
    this.show = true;
  }

}
