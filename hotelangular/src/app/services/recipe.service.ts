import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../models/recipemodel';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private httpclient:HttpClient) { }
  
  url:string = 'http://localhost:3000/customer/get_recipe';

  recipes:Recipe[];

  // Recipe for Customer
  getRecommended(){
    this.httpclient.get(this.url+'/recommended').subscribe((data)=>{
      this.recipes = data['recipes'];
      console.log(this.recipes)
    })
  }

  getStarter(){
    this.httpclient.get(this.url+'/starter').subscribe((data)=>{
      this.recipes = data['recipes'];
    })
  }

  getBreads(){
    this.httpclient.get(this.url+'/breads').subscribe((data)=>{
      this.recipes = data['recipes'];
    })
  }

  getMain_Course(){
    this.httpclient.get(this.url+'/main-course').subscribe((data)=>{
      this.recipes = data['recipes'];
    })
  }
  
  addRecipe(data:Recipe){
    this.httpclient.post('http://localhost:3000/admin/add_recipe', data).subscribe((data)=>{
      if(data['status'] == 'success'){
        alert(data['message']);
      }
    })
  }

  updateRecipe(data,id){
    this.httpclient.post('http://localhost:3000/admin/update_recipe/'+id, data).subscribe((data)=>{
      if(data['status'] == 'success'){
        alert(data['message']);
      }
    })
  }

  deleteRecipe(id){
    this.httpclient.delete('http://localhost:3000/admin/delete_recipe/'+id).subscribe((data)=>{
      if(data['status'] == 'success'){
        alert(data['message']);
      }
    })
  }

}
