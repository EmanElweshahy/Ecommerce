import { Component, OnInit} from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { ApiDataService } from 'src/app/services/api-data.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit{

  constructor(private _ApiDataService:ApiDataService){};
  brandsData:Category[]=[];
  ngOnInit(): void {
    this._ApiDataService.getBrands().subscribe({
      next:( {data} )=>{
        this.brandsData = data
        console.log(this.brandsData)
      }
    })
  }
  
}
