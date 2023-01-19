import { Component } from '@angular/core';
import { Form, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  roomList =<any>[];

  addRoomForm = this.formBuilder.group({
    no_of_rooms: '',
    no_of_adults: '',
  })

  searchForm = this.formBuilder.group({
    checkInDate: '',
    checkOutDate: '',
    rooms: this.roomList,
  })
  constructor(private formBuilder: FormBuilder){}

  onSubmit(): void{
    console.warn('searching', this.searchForm.value);
    console.warn('roomlist', this.roomList)
    this.searchForm.reset();
  }

  onRoomAdd(): void{
    this.roomList.push({rooms:this.addRoomForm.value.no_of_rooms, adults: this.addRoomForm.value.no_of_adults});
    console.warn('room adding', this.addRoomForm.value);
    console.warn('room object', {rooms:this.addRoomForm.value.no_of_rooms, adults: this.addRoomForm.value.no_of_adults});
    console.warn('list', this.roomList);
    this.addRoomForm.reset();
  }
}

