import { Component ,OnInit} from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


constructor( private rou:Router){}

ngOnInit(): void {
  let user =sessionStorage.getItem('emailnm');
  console.log(`user name is ${user}`);

  if(user == null || user == '')
  this.rou.navigate(['login'])
}


logout(){
  sessionStorage.clear();
}

}
