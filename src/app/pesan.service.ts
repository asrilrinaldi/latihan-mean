import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
url="http://localhost:3000/api/employees/";
_id: any;
id:any;
  constructor(private http:HttpClient) {}

 getData(){
   return this.http.get('http://localhost:3000/api/employees');
 }

viewuser(id: any){
  return this.http.get('http://localhost:3000/api/employees/'+id);
}

updateData(id: any, data: any){
  return this.http.put('http://localhost:3000/api/employees/'+id, data);
}
deleteData(id: any){
  return this.http.delete('http://localhost:3000/api/employees/'+id);
}

}