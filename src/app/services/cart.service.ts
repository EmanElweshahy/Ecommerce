import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _HttpClient:HttpClient) { };

  //global becouse i will use it 4 times with 4 different apis
  myToken:any= {Token:localStorage.getItem('_token')};

  addToCart(prodId:string):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/cart`,
    {productId:prodId},
    {headers: this.myToken}
    )
  }

  getCart():Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/cart`,
    {
      headers:this.myToken
    })
  }

  removeItem(prodId:string):Observable<any>{
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${prodId}`,
    {headers: this.myToken})
  }

  UpdateCartQuantity(id:string , countNum:number):Observable<any>{
    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
    {
      count:countNum
    },
    {
      headers:this.myToken
    }
    )
  }

  paymentMethod(id:string , orderDetails:object):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=http://localhost:4200`,
    {
        shippingAddress:orderDetails
    },
    {
      headers:this.myToken
    })
  }
  
}
