import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PageInfo} from "./models/PageInfo";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  private url:string="assets/data.json"
  constructor(private http:HttpClient) { }

  getData():Observable<PageInfo[]>{
    return this.http.get<PageInfo[]>(this.url);
  }

}
