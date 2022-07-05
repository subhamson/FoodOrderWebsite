import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm !: FormGroup

  constructor(private formBuilder: FormBuilder, private http : HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      Email:[''],
      Pass:['']
    })
  }
  login(){
    this.http.get<any>("http://127.0.0.1:8000/signup/")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.Email === this.loginForm.value.Email && a.Pass === this.loginForm.value.Pass
      });
      if(user){
        alert("LogIn Success");
        this.loginForm.reset();
        this.router.navigate([''])
      }else{
        alert("User Not Found");
      }
    })
  }

}
