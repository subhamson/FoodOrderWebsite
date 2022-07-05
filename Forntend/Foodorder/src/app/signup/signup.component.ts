import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signupForm !: FormGroup;
  isSubmitted=false;

  constructor(private formBuilder: FormBuilder, private http : HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      Name:['', Validators.required],
      Email:['', [Validators.required, Validators.email]],
      Mobile:['', Validators.required],
      Pass:['', Validators.required]
    })
  }
  signUp(){
    this.http.post<any>("http://127.0.0.1:8000/signup/", this.signupForm.value)
    .subscribe(res=>{
      alert("Sign Up Successfull");
      this.signupForm.reset();
      this.router.navigate(['login']);
    })
  }

}
