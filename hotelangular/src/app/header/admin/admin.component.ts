import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router:Router) { }
  
  navLinks=[
    { link:'inventory',
      label:'Inventory' }
  ]

  ngOnInit() {
    this.router.navigate(['/header/admin/inventory']);
  }
 
  onClickLink(event:MatTabChangeEvent){
    this.router.navigate(['/header/admin/'+this.navLinks[event.index].link]);
  }
 

}
