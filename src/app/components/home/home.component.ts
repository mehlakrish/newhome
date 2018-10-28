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

  countries = [
    {id: 1, name: 'United States'},
    {id: 2, name: "Australia"},
    {id: 3, name: "Canada"},
    {id: 4, name: "Brazil"},
    {id: 5, name: "England"},
  ];
 selectedValue = null ;
   constructor(
   private http: Http
  ) { }
  
   
  ngOnInit() {
    this.userForm = new FormGroup({
        userName: new FormControl(''),
        password: new FormControl(''),
        country: new FormControl(4),
        sex: new FormControl('m'),
        tmc: new FormControl(true),
    });
  }
  
  onSubmit() {
 //   console.log(this.userForm.value);
   // this.submitted = true;

    this.http.post('http://localhost/test.php',  this.userForm.value).subscribe(res => {
        console.log(res);
    }, err => {
      console.log(err);
    });
  }

}
