import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiDataService } from 'src/app/services/api-data.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{

  constructor(private _ApiDataService:ApiDataService , private _CartService:CartService , private _ToastrService:ToastrService){}

  productsData:any[] = [];

  ngOnInit(): void {
    this._ApiDataService.getProducts().subscribe({
      next:(response)=>{
        this.productsData = response.data
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
