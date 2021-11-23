import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup,FormControl, Validators} from '@angular/forms'
import jwt from 'jwt-decode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('',Validators.required),
    password : new FormControl('',Validators.required)
  })

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.Login(this.loginForm.value).subscribe(data => {
        localStorage.setItem('token',JSON.stringify(data))
        this.router.navigate(['/home'])
      },
      error => alert(error.error.message))
  }
}


