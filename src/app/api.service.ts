import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {}


  getAllCurrencies()
  {
    return this.http.get('https://api.fastforex.io/fetch-all?api_key=6b988adcd1-bf1e3fbd25-so5c26')
  }
}
