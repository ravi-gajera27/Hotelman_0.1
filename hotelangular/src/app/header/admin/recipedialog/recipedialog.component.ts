import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { Recipe } from 'src/app/models/recipemodel';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipedialog',
  templateUrl: './recipedialog.component.html',
  styleUrls: ['./recipedialog.component.css']
})
export class RecipedialogComponent implements OnInit {
  
  constructor(private formBuilder:FormBuilder, @Inject(MAT_DIALOG_DATA) private data:any, private recipeService:RecipeService,private dialod:MatDialog ){ }
  dialogFormGroup:FormGroup;
  updateMode:boolean = false;
  deleteMode:boolean = false;
  
  ngOnInit() {
    this.dialogFormGroup = this.formBuilder.group({
     category:['',Validators.required],
     recipename:['',Validators.required],
     recipeprice:['',Validators.required],
     imagepath:['',Validators.required]
    })

    if(this.data['mode'] == 'delete'){
      this.deleteMode = true;
    }

    else if(this.data['mode'] == 'update'){
      this.dialogFormGroup.setValue({
        category:this.data['element'].category,
        recipename:this.data['element'].recipename,
        recipeprice:this.data['element'].recipeprice,
        imagepath:this.data['element'].imagepath
      })
     this.updateMode = true;
    }
    else{}
  }
 
  onSubmit(){
  
    if(!this.updateMode && this.dialogFormGroup.valid){
    let dataValue:Recipe = this.dialogFormGroup.value;
     this.recipeService.addRecipe(dataValue);
     this.updateMode = false;
    }

   else if(this.updateMode && this.dialogFormGroup.valid){
      let dataValue:Recipe = this.dialogFormGroup.value;
      this.recipeService.updateRecipe(dataValue,this.data['element']._id);
      this.updateMode = false;
    }

    else{
      this.recipeService.deleteRecipe(this.data['_id']);
      this.deleteMode = false;
    }
    this.dialod.closeAll();
  }

}
