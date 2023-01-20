import { Component } from '@angular/core';
import { Form, FormBuilder } from '@angular/forms';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  roomList =<any>[];
  searchResults = <any>[];

  addRoomForm = this.formBuilder.group({
    no_of_rooms: '',
    no_of_adults: '',
  })

  searchForm = this.formBuilder.group({
    checkInDate: '',
    noOfNights: '',
    rooms: [],
  })
  constructor(private formBuilder: FormBuilder, 
    private api: ApiService){}

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
    // this.addRoomForm.reset();
    // 
    // this.searchForm.reset();
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
}

