import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Observable } from 'rxjs';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-starter',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.css']
})
export class StarterComponent implements OnInit {

  constructor(public recipeservice:RecipeService, private media:MediaObserver) { }
  
  gridCol:Number;
  media$:Observable<MediaChange>;
  ngOnInit() {
    this.recipeservice.getStarter();
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
