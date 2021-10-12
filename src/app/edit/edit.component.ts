import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, } from '@angular/forms';
import { CommonService } from '../pesan.service';
import { Router } from '@angular/router';
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
  alert: boolean = false;
  userDetails: any;
  userId: any;
  editBarang = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    department: new FormControl('')

  });

  constructor(
    private route: ActivatedRoute,
    private Service: CommonService,
    private router: Router,
    private formBuilder: FormBuilder

  ) { }


  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.userId = data.id;
    });
    if (this.userId !== '') {
      this.Service.viewuser(this.userId)
        .toPromise()
        .then(data => {
          this.userDetails = data;
          Object.assign(this.userDetails, data);
          console.log(this.userDetails);


          this.editBarang = this.formBuilder.group({
            'id': new FormControl(this.userDetails.id),
            'name': new FormControl(this.userDetails.name),
            'department': new FormControl(this.userDetails.department)
          })
        })
        .catch(err => {
          console.log(err);
        })
    }

  }

  updateData() {
    if (confirm('Apakah data sudah benar?')) {
      console.log(this.editBarang.value);
      this.Service.updateData(this.route.snapshot.params.id, this.editBarang.value).
        subscribe((result) => {
          console.log(result);

        })
      
    }
  }

  deleteData() {
    if (confirm('Apakah ingin menghapus data?')) {
      this.Service.deleteData(this.route.snapshot.params.id).
        subscribe((result) => {
          console.log(result);
        })
    
    }
    location.href = '/home';

  }






}