import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, } from '@angular/forms';
import { CommonService} from '../pesan.service';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';




@Injectable({
  providedIn: 'root'
})


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
 alert:boolean = false;
 userDetails : any;
 userId : any;
 editBarang= new FormGroup({
   id: new FormControl(''),
   name: new FormControl(''),
   department: new FormControl('')

 });

  constructor (
    private route: ActivatedRoute,
    private Service: CommonService,
    private formBuilder: FormBuilder
    
    ){}
 

  ngOnInit(): void{
  //   console.warn(this.route.snapshot.params.id)
  //   this.Service.getCurrentData(this.route.snapshot.params.id).subscribe((result)=>{
  //   console.warn(result)
    
    
  //   this.editBarang= new FormGroup({
      
  //     id: new FormControl(result),
  //     name: new FormControl(''),
  //     department: new FormControl('')
   
  //   });
  
  // })
  this.route.params.subscribe(data => {
    this.userId = data.id;
  });
  if(this.userId  !==''){
    this.Service.viewuser(this.userId)
    .toPromise()
    .then(data =>{
      this.userDetails =data;
      Object.assign(this.userDetails,data);


      this.editBarang = this.formBuilder.group({
        'id' : new FormControl(this.userDetails.id),
        'name' : new FormControl(this.userDetails.name),
        'department' : new FormControl(this.userDetails.department)
      })
    })
  }

  }
  getOne(){

  }
  


 

}