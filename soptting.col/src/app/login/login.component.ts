import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { LocalService } from '../services/local.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = "";
  password: string = "";
  errorMsg: string = ""
  token: string = ""

  constructor(
    private auth: AuthService, 
    private router: Router,
    private localStore: LocalService
  ) {};

  ngOnInit(): void {

  };

  onLogin(): void{
    if(this.username.trim().length === 0){
      this.errorMsg = "Please provide an user";
    }else if(this.username.trim().length === 0){
      this.errorMsg = "Please provide a password";
    }else{
      this.errorMsg = ""
      this.auth
        .login(this.username, this.password)
        .subscribe(
          (response) => {
            const data: any = response.data
            if(response.token){
              this.token = response.token
              this.localStore.saveData("token", this.token)
              this.router.navigate(['/home']);
            };
          },
          (error) => {
            const status: number = error.status
            if(status === 404) this.errorMsg = "User not found";
            if(status === 401) this.errorMsg = "Incorrect password"
          }
        )
    }
    
  }
}
