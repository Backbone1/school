import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { DataserviceService } from '../../dataservice.service';

@Component({
  selector: 'app-sylbs-upload',
  templateUrl: './sylbs-upload.component.html',
  styleUrls: ['./sylbs-upload.component.css']
})
export class SylbsUploadComponent implements OnInit {
  data:any;
  constructor(private route:Router, private service:DataserviceService) { 
    this.data = service.getOption(); 
    console.log(this.data);
    
   }

  ngOnInit(): void {
    
   
    
  }

}
