import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  constructor(private _HttpClient:HttpClient) { };

  myToken:any= {Token:localStorage.getItem('_token')};


  getProducts():Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/Products `)
  }

  getProductDetails(id:any):Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  }

  getCategories():Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories`)
  }

  getBrands():Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/brands`)
  }

  addToWishList(id:any):Observable<any>{
      return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/wishlist`,
      {productId:id},
      {headers: this.myToken}
      )
    }
  
  getWishListData():Observable<any>{
      return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/wishlist`,
      {headers: this.myToken}
      )
    }
  
  removeItem(prodId:any):Observable<any>{
      return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${prodId}`,
      {headers: this.myToken})
    }

  getCategoryDetails(id:string):Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}`)
  }
}
