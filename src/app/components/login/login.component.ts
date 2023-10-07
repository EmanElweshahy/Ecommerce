import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private _AuthService:AuthService , private _Router:Router){}

  isLoading:boolean = false;
  errorMsg:string = '';

  loginForm:FormGroup = new FormGroup({
    email:new FormControl('',[Validators.required , Validators.email]),
    password:new FormControl('', [Validators.required , Validators.pattern(/^\w{6,}$/)]),
  });

  handleLogin():void{

    this.isLoading = true ;

    if(this.loginForm.valid){
      this._AuthService.loginForm(this.loginForm.value).subscribe({
        next:(response)=>{
          
          this.isLoading = false ;
          if(response.message == "success"){
            localStorage.setItem('_token',response.token);
            this._Router.navigate(['/Home'])
          }
        },
        error:(err)=>{
          this.isLoading = false;
          this.errorMsg = err.error.message
        }
      })
    }
  }
}
