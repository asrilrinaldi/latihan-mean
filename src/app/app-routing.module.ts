import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { TambahComponent } from './tambah/tambah.component';



const appRoutes: Routes = [
  { path: '',     component:  HomeComponent },
  { path: 'tambah',  component:  TambahComponent},
  { path: 'edit/:id',  component:  EditComponent},
  { path: '**',   redirectTo: ''}
];

@NgModule({
  declarations: [],
  imports: [
      CommonModule,
      RouterModule.forRoot(appRoutes)
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule { }
