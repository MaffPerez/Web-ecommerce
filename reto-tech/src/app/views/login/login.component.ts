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
    email: new FormControl('',Validators.required),
    password : new FormControl('',Validators.required)
  })

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.checkLocalStorage();
  }

  checkLocalStorage(){
    if(localStorage.getItem('token')){
      this.router.navigate(['/home'])
    }}

  login() {
  //   alert('hola bandida')
  //   this.authService.Login(this.loginForm.value).subscribe(
  //     data => console.log('success', data),
  //     error => alert(error.error.message))
  // }

    this.authService.Login(this.loginForm.value).subscribe(
      data => {
        console.log(data.token)
        localStorage.setItem('token',data.token)
        const user:any = jwt(data.token);
        console.log(user)
        const userId = user.id;
        localStorage.setItem('userId', userId)
        console.log(user)
      },
      error => {
        if(error.status > 400){
        alert('Por favor verifIque los campos')
        }
        else if (error.status == 400){
          alert('Por favor complete los campos')
        }
      })
}

}

