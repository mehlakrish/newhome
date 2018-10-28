import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Http } from '@angular/http'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imgPath  = '/assets/img/login-banner.jpg';
  user: any;
  userForm: FormGroup;
  submitted = false;
  countries:any = [];
/*
  countries = [
    {id: 1, name: 'United States'},
    {id: 2, name: "Australia"},
    {id: 3, name: "Canada"},
    {id: 4, name: "Brazil"},
    {id: 5, name: "England"},
  ];*/
 selectedValue = null ;
   constructor(
   private http: Http
  ) { 

    this.http.get('http://localhost/test.php').subscribe(res=>{
    this.countries = res; 
    console.log(res);

    });
  }
  
   
  ngOnInit() {
    this.userForm = new FormGroup({
        userName: new FormControl('',Validators.required),
        password: new FormControl('',Validators.required),
        country: new FormControl(4),
        sex: new FormControl('m'),
        tmc: new FormControl(true),
    });
  }

  onSubmit() {
 console.log(this.userForm);
   // this.submitted = true;
    if(this.userForm.valid){
      
      this.http.post('http://localhost/test.php',  this.userForm.value).subscribe(res => {
        console.log(res);
    }, err => {
      console.log(err);
    });
    }
    
  }

}
