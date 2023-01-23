import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-contract-dialog',
  templateUrl: './add-contract-dialog.component.html',
  styleUrls: ['./add-contract-dialog.component.css']
})
export class AddContractDialogComponent {
  roomTypes= <any> [];
  hotels = <any>[];
  data = <any> [];
  addContractForm !: FormGroup;
  addRoomtypesForm !: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private api: ApiService,
    private _snackBar: MatSnackBar,
     private dialogRef: MatDialogRef<AddContractDialogComponent>){
      // this.hotels = service.getHotels();
    }
  

  ngOnInit(): void{
    this.addContractForm = this.formBuilder.group({
      hotelName: ['', Validators.required],
      startingDate: ['', Validators.required],
      endingDate: ['', Validators.required],
      markupValue: ['', Validators.required],
    });
    this.addRoomtypesForm = this.formBuilder.group({
      roomType: ['', Validators.required],
      no_of_rooms: ['', Validators.required],
      max_no_of_adults: ['', Validators.required],
      price_per_one: ['', Validators.required],
    });
    this.getAllHotels();
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  addContract(){
    console.log(this.addContractForm.value);
    if(this.addContractForm.valid){
      this.addContractForm.value.roomTypes = this.roomTypes;
      console.log(this.addContractForm.value)
      this.api.postContract(this.addContractForm.value)
      .subscribe({
        next:(res)=>{
          this.openSnackBar("Contract added successfully", "close");
          this.addContractForm.reset();
          this.dialogRef.close('save');
        },
        error:()=>{
          this.openSnackBar("Error while adding the contract", "close");
        }
      })
    }
  }

  getAllHotels() {
    this.api.getHotels()
    .subscribe({
      next:(res)=>{
        // console.log('hotels',res);
        this.hotels = res;
        console.log("hotel list = ", this.hotels)
      } 
    })
  }

  addRoomType(){
    if(this.addRoomtypesForm.valid){
      this.roomTypes.push({roomTypeName:this.addRoomtypesForm.value.roomType, 
        noOfRooms: this.addRoomtypesForm.value.no_of_rooms,
        maxNoOfAdults: this.addRoomtypesForm.value.max_no_of_adults,
       pricePerOnePerson: this.addRoomtypesForm.value.price_per_one});
      console.log('list', this.roomTypes);
      this.addRoomtypesForm.reset();
    }
    else{
      alert("Enter valid data!");
    }
  }
}
