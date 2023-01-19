import { ApiService } from "./api.service";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HotelService  {
    hotels = <any> [];
    constructor(private api: ApiService){
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
        return this.hotels;
      }

    getHotels(){
        return [
        {name: 'Hilton', availability: 'AVAILABLE', rooms: [{roomType: "City View", price: 35000}, {roomType: "Sea View", price: 50000}]},
        {name: 'Galadari', availability: 'UNAVAILABLE', rooms: [{roomType: "City View", price: 35000}, {roomType: "Sea View", price: 50000}]},
        {name: 'Cinnamon Grand', availability: 'AVAILABLE', rooms: [{roomType: "City View", price: 35000}, {roomType: "Sea View", price: 50000}]},
        {name: 'Hilton', availability: 'AVAILABLE', rooms: [{roomType: "City View", price: 35000}, {roomType: "Sea View", price: 50000}]},
        {name: 'Galadari', availability: 'UNAVAILABLE', rooms: [{roomType: "City View", price: 35000}, {roomType: "Sea View", price: 50000}]},
        {name: 'Cinnamon Grand', availability: 'AVAILABLE', rooms: [{roomType: "City View", price: 35000}, {roomType: "Sea View", price: 50000}]},
        {name: 'Hilton', availability: 'AVAILABLE', rooms: [{roomType: "City View", price: 35000}, {roomType: "Sea View", price: 50000}]},
        {name: 'Galadari', availability: 'UNAVAILABLE', rooms: [{roomType: "City View", price: 35000}, {roomType: "Sea View", price: 50000}]},
        {name: 'Cinnamon Grand', availability: 'AVAILABLE', rooms: [{roomType: "City View", price: 35000}, {roomType: "Sea View", price: 50000}]},
        {name: 'Kingsbury', availability: 'AVAILABLE', rooms: [{roomType: "City View", price: 35000}, {roomType: "Sea View", price: 50000}]}]
    }
}