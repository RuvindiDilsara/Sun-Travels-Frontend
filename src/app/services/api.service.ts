import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiServerUrl = "http://localhost:8080";

  constructor( private http: HttpClient) { }

  postContract(data: any){
    return this.http.post<any>(`${this.apiServerUrl}/api/contract/add`, data);
  }

  getContract(){
    return this.http.get<any>(`${this.apiServerUrl}/api/contract/all`);
  }

  postHotel(data:any): Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}/api/hotel/add`,data);
  }

  getHotels(): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/api/hotel/all`);
  }
}
