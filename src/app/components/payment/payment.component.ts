import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit{

  constructor(private _CartService:CartService, private _ActivatedRoute:ActivatedRoute){}

  id:any = '';

  ngOnInit(): void {
      this._ActivatedRoute.paramMap.subscribe({
        next:(params)=>{
          this.id = params.get('id')
        }
      })
  }
  paymentForm:FormGroup = new FormGroup(
    {
      details: new FormControl(''),
      phone: new FormControl(''),
      city: new FormControl('')
    }
  )

  handlePayment():void{
    // console.log(this.paymentForm.value)
    const cartDetails = this.paymentForm.value;

    this._CartService.paymentMethod(this.id , cartDetails).subscribe({
      next:(response)=>{
        window.open(response.session.url)
      }
    })

  }
}
