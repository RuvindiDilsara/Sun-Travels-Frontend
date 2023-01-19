import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-add-hotel-form',
  templateUrl: './add-hotel-form.component.html',
  styleUrls: ['./add-hotel-form.component.css']
})
export class AddHotelFormComponent {
  addHotelForm !: FormGroup;

  constructor (private formBuilder: FormBuilder, private api: ApiService, private dialogRef: MatDialogRef<AddHotelFormComponent>){

  }
  ngOnInit(){
    this.addHotelForm = this.formBuilder.group({
      hotelName: ['', Validators.required],
      address: ['', Validators.required],
      contactNo: ['', Validators.required],
    });
  }

  addHotel(){
    console.log(this.addHotelForm.value);
    if(this.addHotelForm.valid){
      this.api.postHotel(this.addHotelForm.value)
      .subscribe({
        next:(res)=>{
          alert("Hotel added successfully");
          this.addHotelForm.reset();
          this.dialogRef.close('save');
        },
        error:()=>{
          alert("Error while adding the hotel");
        }
      })
    }
  }
}
