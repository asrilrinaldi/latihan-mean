import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tambah',
  templateUrl: './tambah.component.html',
  styleUrls: ['./tambah.component.css']
})
export class TambahComponent implements OnInit {

  id ='';
  name ='';
  department ='';

  constructor (private http: HttpClient, private router: Router){}
 

  async ngOnInit(){
 
  }

  kirim(){
   if(confirm('Apakah data sudah benar?')){
   console.log(this.id, this.name, this.department);
   this.http.post('http://localhost:3000/api/employees', {id: this.id, name: this.name, department: this.department}). toPromise();
location.href = '/home';
   }
   
  }

}
