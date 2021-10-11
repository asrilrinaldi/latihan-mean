import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { disableDebugTools } from '@angular/platform-browser';


@Component({
  selector: 'app-tambah',
  templateUrl: './tambah.component.html',
  styleUrls: ['./tambah.component.css']
})
export class TambahComponent implements OnInit {

  id ='';
  name ='';
  department ='';
  data: String[]=[];
  

  constructor (private http: HttpClient, private router: Router){}
 

  async ngOnInit(){
    this.data = (await this.http.get('http://localhost:3000/api/employees').toPromise()) as any[];
    console.log(this.data);
  }

  kirim(){
   if(confirm('Apakah data sudah benar?')){
   console.log(this.id, this.name, this.department);
   this.http.post('http://localhost:3000/api/employees', {id: this.id, name: this.name, department: this.department}). toPromise();
   this.router.navigate(['./home']);
   
   
   }
  }

  hapus(id: String){
    if(confirm('Apakah yakin ingin menghapus data?')){

    console.log(id);
    this.http.delete('http://localhost:3000/api/employees/'+id). toPromise();
    this.ngOnInit(); //auto refresh komponen tanpa reload
    }
  }


}
