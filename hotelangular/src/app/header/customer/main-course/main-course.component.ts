import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Observable } from 'rxjs';
import { MediaChange, MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-main-course',
  templateUrl: './main-course.component.html',
  styleUrls: ['./main-course.component.css']
})
export class MainCourseComponent implements OnInit, AfterViewInit {

  constructor(public recipeservice:RecipeService, private media:MediaObserver) { }
  
  gridCol:number;
  media$:Observable<MediaChange>;
  ngOnInit() {
    this.recipeservice.getMain_Course();
  }

  ngAfterViewInit(){
    this.updateGrid();
    this.media.media$.subscribe(change => {this.updateGrid();})
   }
 
   updateGrid():void{
     if (this.media.isActive('xl')) { this.gridCol = 5; }
     else if (this.media.isActive('lg')) { this.gridCol = 4; }
     else if (this.media.isActive('md')) { this.gridCol = 3; }
     else if (this.media.isActive('sm')) { this.gridCol = 2; }
     else if (this.media.isActive('xs')) { this.gridCol = 1; }
   }

}
