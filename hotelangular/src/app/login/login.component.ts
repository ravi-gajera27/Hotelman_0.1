import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private httpClient:HttpClient, private formBuilder:FormBuilder, private router:Router) { }
  loginForm: FormGroup;

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      pass:['',[Validators.required, Validators.minLength(8)]]
    })
  }
  
  onSubmit(){
    let data={email:this.loginForm.value.email,pass:this.loginForm.value.pass};
     console.log(data);
     this.httpClient.post("http://localhost:3000/admin/authentication",data).subscribe((data) =>{
        this.loginForm.reset();
        alert(data['message']);
        if(data['status'] == 'success'){
          this.router.navigate(['/header']);
        }
     });
  }

}
