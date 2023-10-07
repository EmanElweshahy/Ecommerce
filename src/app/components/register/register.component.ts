import { Component } from '@angular/core';
import { FormControl, FormControlOptions, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private _AuthService:AuthService , private _Router:Router){}

  isLoading:boolean = false;
  errorMsg:string = '';

  registerForm:FormGroup = new FormGroup({
    name:new FormControl('', [Validators.required , Validators.minLength(3) , Validators.maxLength(10)]),
    email:new FormControl('',[Validators.required , Validators.email]),
    password:new FormControl('', [Validators.required , Validators.pattern(/^[a-zA-Z0-9_@]{6,}$/)]),
    rePassword:new FormControl(''),
    phone:new FormControl('',[Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)])
  } , {validators:[this.confirmPassword]} as FormControlOptions);

  confirmPassword(group:FormGroup):void{
    const pass = group.get('password');
    const repass = group.get('rePassword');

    if(repass?.value == ''){
      repass?.setErrors({required:true});
    }else if(pass?.value != repass?.value){
      repass?.setErrors({mismatch:true});
    }
  }

  handleRegister():void{

    this.isLoading = true ;

    if(this.registerForm.valid){
      this._AuthService.registerForm(this.registerForm.value).subscribe({
        next:(response)=>{
          
          this.isLoading = false ;
          if(response.message == "success"){
            this._Router.navigate(['/Login'])
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
