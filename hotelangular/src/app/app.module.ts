import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './modules/material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { HeaderComponent } from './header/header.component';
import { CustomerComponent } from './header/customer/customer.component';
import { RecommendedComponent } from './header/customer/recommended/recommended.component';
import { StarterComponent } from './header/customer/starter/starter.component';
import { MainCourseComponent } from './header/customer/main-course/main-course.component';
import { BreadsComponent } from './header/customer/breads/breads.component';
import { MyOrderComponent } from './header/customer/my-order/my-order.component';
import { AdminComponent } from './header/admin/admin.component';
import { InventoryComponent } from './header/admin/inventory/inventory.component';
import { RecipedialogComponent } from './header/admin/recipedialog/recipedialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    CustomerComponent,
    RecommendedComponent,
    StarterComponent,
    MainCourseComponent,
    BreadsComponent,
    MyOrderComponent,
    AdminComponent,
    InventoryComponent,
    RecipedialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,

  ],
  entryComponents:[RecipedialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
