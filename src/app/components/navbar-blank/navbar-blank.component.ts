import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar-blank',
  templateUrl: './navbar-blank.component.html',
  styleUrls: ['./navbar-blank.component.scss']
})
export class NavbarBlankComponent implements OnInit{

  constructor(private _Router:Router , private _CartService:CartService){}
  cartDetails:any=null;
  _response:any={};
  ngOnInit(): void {
      this._CartService.getCart().subscribe({
        next:(response)=>{
          this.cartDetails = response.data;
          this._response = response;
        }
      })
    }
  signOut():void{
    localStorage.removeItem('_token');
    this._Router.navigate(['/Login']);
  }
}
