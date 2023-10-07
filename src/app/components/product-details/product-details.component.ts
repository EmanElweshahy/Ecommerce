import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { ApiDataService } from 'src/app/services/api-data.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{

  constructor(private _ActivatedRoute:ActivatedRoute ,private _ApiDataService:ApiDataService , private _CartService:CartService , private _ToastrService:ToastrService){};

  productId:any;
  productDetails:any = null;

  ngOnInit(): void {
      this._ActivatedRoute.paramMap.subscribe({
        next:(params)=>{
          this.productId=params.get('id');
        }
      })

    this._ApiDataService.getProductDetails(this.productId).subscribe({
      next:(respons)=>{
        this.productDetails = respons.data; 
      }
    })

  }

  productOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    items:1,
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
