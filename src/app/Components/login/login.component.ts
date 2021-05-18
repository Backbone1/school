import { Component, OnInit } from '@angular/core';
import {  Router} from '@angular/router';
import { DataserviceService } from '../../dataservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;
  constructor(private route:Router, private service:DataserviceService) { }

  login(){
    if(this.username != '' && this.username != undefined && this.password != '' && this.password != undefined)
    {
      this.route.navigate(['/Dash'])
      console.log(this.username);
      console.log(this.password);
      
      this.service.setOption('Name', this.username);
    }
    else{
      alert('Please enter')
    }
    
    
  }
  ngOnInit(): void {
  }

}
