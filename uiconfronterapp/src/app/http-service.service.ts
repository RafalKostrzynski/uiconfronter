import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {PageInfo} from "./models/PageInfo";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http:HttpClient) { }

  getData():Observable<PageInfo[]>{
    let params = new HttpParams().set("url","facebook.com").set("localDate", "2010-12-10");
    return this.http.get<PageInfo[]>("http://localhost:8080/UI-Confronter",  {params: params} );
  }

}
