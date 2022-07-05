import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = 'http://127.0.0.1:8000/'
  public search = new BehaviorSubject<string>("");

  constructor(private http:HttpClient) { }


  getFoodLists():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + 'foodlist/');
  }
}
