import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/interfaces/category';
import { ApiDataService } from 'src/app/services/api-data.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _ApiDataService:ApiDataService , private _CartService:CartService , private _ToastrService:ToastrService){};

  productsData:any[] = [];
  categoriesData:Category[] = [];
  wishListData:any[] = [];

  ngOnInit(): void {
    this._ApiDataService.getProducts().subscribe({
      next:(response)=>{
        this.productsData = response.data
      }
    })

    this._ApiDataService.getCategories().subscribe({
      next:(response)=>{
        this.categoriesData = response.data;
      },
      error:(err)=>{
        console.log(err)
      }
    })

    this._ApiDataService.getWishListData().subscribe({
      next:(response)=>{
        const idData = response.data.map((item:any)=>item._id);
        console.log(idData)
        this.wishListData = idData
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

  categoryOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    autoplay:true,
    autoplayTimeout:500,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 7
      }
    },
    nav: true
  }

  mainSlideOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    items:1,
    nav: true
  }

  //i do this method becouse the button is in home so i should call the home ts i can't call the service directly
  addProductToCart(id:string):void{
    this._CartService.addToCart(id).subscribe({
      next:(response)=>{
        console.log(response);
        this._ToastrService.success(response.message)
      }
    })
  }

  addToList(id:any):void{
    this._ApiDataService.addToWishList(id).subscribe({
      next:(response)=>{
        // console.log(response);
        this.wishListData = response.data;   
        this._ToastrService.success(response.message);
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

      }
    })
  }

}
