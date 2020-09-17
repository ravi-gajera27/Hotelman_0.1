import { Component, OnInit, ViewEncapsulation, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { MatTabChangeEvent, MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CustomerComponent implements OnInit {

  
  constructor(private router: Router) {
  }
  navLinks = [
    {
      label: 'Recommended',
      link: 'recommended',
    },
    {
      label: 'Starter',
      link: 'starter',
    },
    {
      label: 'Main-Course',
      link: 'main-course',
    },
    {
      label: 'Breads',
      link: 'breads',
    },
    {
      label: 'My-Order',
      link: 'my-order'
    }
  ]

  ngOnInit() {
    this.router.navigate(['header/customer/recommended']);
  }


  onClickLink(event: MatTabChangeEvent) {
    console.log("tab change");
    this.router.navigate(['header/customer/' + this.navLinks[event.index].link]);
  }

}
