import { Component } from '@angular/core';
import { Form, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  roomList =<any>[];
  searchResults = <any>[];
  minDate!: Date;
  maxDate !: Date;

  ngOnInit(){
    this.minDate=new Date();
    this.maxDate = new Date(this.minDate.getFullYear()+1,12,30);
  }

  addRoomForm = this.formBuilder.group({
    no_of_rooms: ['', Validators.required],
    no_of_adults: ['', Validators.required],
  })

  searchForm = this.formBuilder.group({
    checkInDate: ['', Validators.required],
    noOfNights: ['', Validators.required],
    rooms: [],
  })
  constructor(private formBuilder: FormBuilder, 
    private api: ApiService,
    private _snackBar: MatSnackBar){}

  onSubmit(): void{
    if(this.searchForm.valid){
      this.searchForm.value.rooms = this.roomList;
      console.log(this.searchForm.value);
      this.api.search(this.searchForm.value)
      .subscribe({
        next:(res)=>{
          this.searchResults = res;
          console.log("searchResults = ", this.searchResults)
        } 
      })
    }
    else{
      this.openSnackBar("Enter required data!", "close");
    }
    
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  onRoomAdd(): void{
    if(this.addRoomForm.valid){
      this.roomList.push({noOfRooms:this.addRoomForm.value.no_of_rooms, noOfAdults: this.addRoomForm.value.no_of_adults});
    console.warn('room adding', this.addRoomForm.value);
    console.warn('room object', {rooms:this.addRoomForm.value.no_of_rooms, adults: this.addRoomForm.value.no_of_adults});
    console.warn('list', this.roomList);
    this.addRoomForm.reset();
    }
  }

  remove(room: any): void {
    const index = this.roomList.indexOf(room);

    if (index >= 0) {
      this.roomList.splice(index, 1);
    }
  }

  reset():void{
    this.addRoomForm.reset();
    this.searchForm.reset();
    this.roomList = [];
    this.searchResults =[];
  }
}

