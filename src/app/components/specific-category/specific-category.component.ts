import { Category } from './../../interfaces/category';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiDataService } from 'src/app/services/api-data.service';

@Component({
  selector: 'app-specific-category',
  templateUrl: './specific-category.component.html',
  styleUrls: ['./specific-category.component.scss']
})
export class SpecificCategoryComponent implements OnInit{

  constructor(private _ApiDataService:ApiDataService ,private _ActivatedRoute:ActivatedRoute){}

  CategoryId:any = '';
  categoryData:Category = {} as Category;

  ngOnInit(): void {
      this._ActivatedRoute.paramMap.subscribe({
        next:(params)=>{
          this.CategoryId=params.get('id');
        }
      })

      this._ApiDataService.getCategoryDetails(this.CategoryId).subscribe({
        next:(response)=>{
          this.categoryData = response.data;
        }
      })
  }
}
