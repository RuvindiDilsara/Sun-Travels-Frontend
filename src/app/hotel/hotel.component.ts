import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { HotelService } from '../services/hotel.service';


@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent {
  hotels = <any>[];

  constructor(private api: ApiService){
    
  }

  ngOnInit(): void{
    this.hotels = this.getAllHotels();
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

}
