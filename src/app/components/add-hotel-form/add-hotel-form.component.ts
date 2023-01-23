import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-add-hotel-form',
  templateUrl: './add-hotel-form.component.html',
  styleUrls: ['./add-hotel-form.component.css']
})
export class AddHotelFormComponent {
  addHotelForm !: FormGroup;

  constructor (private formBuilder: FormBuilder, 
    private _snackBar: MatSnackBar,
    private api: ApiService, 
    private dialogRef: MatDialogRef<AddHotelFormComponent>){

  }
  ngOnInit(){
    this.addHotelForm = this.formBuilder.group({
      hotelName: ['', Validators.required],
      address: ['', Validators.required],
      contactNo: ['', Validators.required],
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  addHotel(){
    console.log(this.addHotelForm.value);
    if(this.addHotelForm.valid){
      this.api.postHotel(this.addHotelForm.value)
      .subscribe({
        next:(res)=>{
          this.openSnackBar("Hotel added successfully", "close");
          this.addHotelForm.reset();
          this.dialogRef.close('save');
        },
        error:()=>{
          this.openSnackBar("Error while adding the hotel", "close");
        }
      })
    }
  }
}
