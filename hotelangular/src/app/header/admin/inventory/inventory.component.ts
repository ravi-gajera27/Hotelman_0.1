import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from 'src/app/models/recipemodel';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { RecipedialogComponent } from '../recipedialog/recipedialog.component';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  constructor(private httpclient: HttpClient,private dialog:MatDialog) { }

  @ViewChild(MatSort, { static: true }) matSort:MatSort;
  @ViewChild(MatPaginator, { static: true }) matPaginator: MatPaginator;

  dataSource:MatTableDataSource<Recipe[]>;
  displayedColumns: string[] = ["category", "recipename", "recipeprice","update","delete"];

  ngOnInit() {
    this.httpclient.get('http://localhost:3000/admin/get_recipe').subscribe((data) => {
      if (data['status'] == 'success') {
        this.dataSource = new MatTableDataSource(data['recipes']);
        this.dataSource.paginator = this.matPaginator;
        this.dataSource.sort = this.matSort;
      }
    })
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

  openRecipeDialog(){
    this.dialog.open(RecipedialogComponent,{width:'500px',data:{mode:'insert'}});
  }

  openRecipeDialogUpdate(element:any){
    this.dialog.open(RecipedialogComponent,{width:'500px',data:{element,mode:'update'}});
  }

  openRecipeDialogDelete(_id:any){
    this.dialog.open(RecipedialogComponent,{width:'500px',data:{_id,mode:'delete'}});
  }


}
