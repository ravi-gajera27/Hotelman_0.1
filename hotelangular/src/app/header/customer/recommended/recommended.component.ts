import { Component, OnInit, AfterViewInit, Inject } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.css']
})
export class RecommendedComponent implements OnInit, AfterViewInit {

  constructor(public recipeservice:RecipeService, private media:MediaObserver) { }

  media$:Observable<MediaChange> 
  gridCol:number;
  first=true;
  second=false;
  ngOnInit() {
  console.log('called')
  this.recipeservice.getRecommended();
  }
  
  ngAfterViewInit(){
   this.updateGrid();
   this.media.media$.subscribe(change => {this.updateGrid();})
  }
 
  myColor=['rgb(200, 241, 185)', 'rgb(217, 215, 241)',  'rgb(209, 230, 243)','rgb(240, 208, 193)']
  updateGrid():void{
    if (this.media.isActive('xl')) { this.gridCol = 5; }
    else if (this.media.isActive('lg')) { this.gridCol = 5; }
    else if (this.media.isActive('md')) { this.gridCol = 4; }
    else if (this.media.isActive('sm')) { this.gridCol = 3; }
    else if (this.media.isActive('xs')) { this.gridCol = 2; }
  }
 
}
