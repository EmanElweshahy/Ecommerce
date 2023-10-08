import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiDataService } from 'src/app/services/api-data.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit{

  constructor(private _ApiDataService:ApiDataService , private _CartService:CartService , private _ToastrService:ToastrService){};

  wishListData:any=null;

  ngOnInit(): void {
    this._ApiDataService.getWishListData().subscribe({
      next:(response)=>{
        this.wishListData = response.data
        console.log(this.wishListData)
      }
    })
  }

  Remove(id:any):void{
    this._ApiDataService.removeItem(id).subscribe({
      next:(response)=>{
        this.wishListData = response.data;   
        console.log(this.wishListData)
        this._ToastrService.warning(response.message)

        
        this._ApiDataService.getWishListData().subscribe({
          next:(response)=>{
            this.wishListData = response.data;  
          } 
        })
      }
    })
  }

  addProductToCart(id:string):void{
    this._CartService.addToCart(id).subscribe({
      next:(response)=>{
        console.log(response);
        this._ToastrService.success(response.message)
      }
    })
  }
}
