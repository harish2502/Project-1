import { Component , OnInit} from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userdefine:boolean=false;

logform = new FormGroup ({
  email : new FormControl('',[Validators.required]),
  password : new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(8)])
})

constructor( private rou: Router){}

ngOnInit(): void {
  
}

logFm(){
  console.log(this.logform.value)
  if(this.logform.controls.email.value != 'harish@gmail.com' || this.logform.controls.password.value != '123456'){
    this.userdefine=true;
    this.logform.reset();
  }else{
    this.userdefine=false;
    sessionStorage.setItem('emailnm',this.logform.controls.email.value);
    this.rou.navigateByUrl('/home');
  }

}

}
