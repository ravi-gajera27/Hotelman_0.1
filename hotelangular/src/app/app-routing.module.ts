import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { CustomerComponent } from './header/customer/customer.component';
import { RecommendedComponent } from './header/customer/recommended/recommended.component';
import { StarterComponent } from './header/customer/starter/starter.component';
import { MainCourseComponent } from './header/customer/main-course/main-course.component';
import { BreadsComponent } from './header/customer/breads/breads.component';
import { MyOrderComponent } from './header/customer/my-order/my-order.component';
import { AdminComponent } from './header/admin/admin.component';
import { InventoryComponent } from './header/admin/inventory/inventory.component';


const routes: Routes = [
  { path:'', redirectTo:'/login', pathMatch:'full'},
  { path:'login', component:LoginComponent },
  
  { path:'header', component:HeaderComponent,
   children:[
     { path:'customer', component:CustomerComponent,
      children:[
        { path:'', redirectTo:'recommended', pathMatch:'full' },
        { path:'recommended', component:RecommendedComponent },
        { path:'starter', component:StarterComponent, },
        { path:'main-course', component:MainCourseComponent },
        { path:'breads', component:BreadsComponent },
        { path:'my-order', component:MyOrderComponent }
    ]},
    {
      path:'admin', component:AdminComponent,
      children:[
        { path:'', redirectTo:'inventory', pathMatch:'full'},
        { path:'inventory', component:InventoryComponent }
      ]
    }
   ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
