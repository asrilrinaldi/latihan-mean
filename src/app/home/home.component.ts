import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonService} from '../pesan.service';


@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  id ='';
  name ='';
  department ='';
  data: any=[];
  

  constructor (private http: HttpClient, private router: Router, employ: CommonService){}
 

  async ngOnInit(){
    this.data = (await this.http.get('http://localhost:3000/api/employees').toPromise()) as any[];
    console.log(this.data);
  }

}