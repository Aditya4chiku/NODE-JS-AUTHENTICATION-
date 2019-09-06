import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  private url="https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI"

  constructor(private http:HttpClient) { }

  getBankDetails=()=>{
   return this.http.get(this.url)
  }




}
