import { Component, OnInit, Renderer2 } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  constructor(private _CartService:CartService ,private _Renderer2:Renderer2){}

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

    Remove(id:string):void{
      this._CartService.removeItem(id).subscribe({
        next:(response)=>{
          this.cartDetails = response.data;
          this._response = response;
          
        }
      })
    }

    changeCount(id:string ,count:number, el1:HTMLButtonElement , el2:HTMLButtonElement):void{
      if (count>=1) {

        this._Renderer2.setAttribute(el1 , 'disabled' , 'true');
        this._Renderer2.setAttribute(el2 , 'disabled' , 'true');

        this._CartService.UpdateCartQuantity(id , count).subscribe({
          next:(response)=>{
            this.cartDetails = response.data
            this._Renderer2.removeAttribute(el1 , 'disabled');
            this._Renderer2.removeAttribute(el2 , 'disabled');
          },
          error:(err)=>{
            this._Renderer2.removeAttribute(el1 , 'disabled');
            this._Renderer2.removeAttribute(el2 , 'disabled');
          }
        })
      }
    }


}
