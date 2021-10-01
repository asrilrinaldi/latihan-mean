import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id ='';
  name ='';
  department ='';
  data: any=[];
 
  

  constructor (private http: HttpClient, private router: Router ){

  }
 

  async ngOnInit(){
    this.data = (await this.http.get('http://localhost:3000/api/employees').toPromise()) as any[];
    console.log(this.data);
  }

  kirim(){
   console.log(this.id, this.name, this.department);
   this.http.post('http://localhost:3000/api/employees', {id: this.id, name: this.name, department: this.department}). toPromise();
   this.ngOnInit(); //auto refresh komponen tanpa reload
  }

  hapus(id: String){
    if(confirm('Apakah yakin ingin menghapus data?')){

    
    console.log(id);
    this.http.delete('http://localhost:3000/api/employees/'+id). toPromise();
    this.ngOnInit(); //auto refresh komponen tanpa reload
    }
  }

 MoveEdit(id: String){
   this.router.navigate(['./edit/'+id]);
   console.log(id);
   return this.http.put('http://localhost:3000/api/employees/',+id);
 }

    
  }

 
