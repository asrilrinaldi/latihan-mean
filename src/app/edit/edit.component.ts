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
 
  

  
  userId: any;
  userDetails: any;
  editEmploy: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    department: new FormControl('')
  })
 
  constructor (private employ:CommonService, private route: ActivatedRoute, private formBuilder: FormBuilder){}
 
  

  ngOnInit(): void{
   this.route.params.subscribe(data =>{
     this.userId = data._id;
   });

  if(this.userId !== ''){
    this.employ.viewuser(this.userId)
    .toPromise()
    .then(data => {
      this.userDetails = data;
      Object.assign(this.userDetails, data);
      console.log(this.userDetails);

      
      this.editEmploy = this.formBuilder.group({
        'id' : new FormControl(this.userDetails.id),
        'name' : new FormControl(this.userDetails.name),
        'department' : new FormControl(this.userDetails.department)
      })

      })
      .catch(err => {
        console.log(err); 
      })


    }
   

  }
  


 

}