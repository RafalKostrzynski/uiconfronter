import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {PageInfo} from "./models/PageInfo";
import {Observable} from "rxjs";
import {PageEntity} from "./models/pageEntity";

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient) {
  }

  getCompareData(pageUrl: string, date: Date): Observable<PageInfo[]> {
    let params = new HttpParams().set("url", pageUrl).set("localDate", date.toISOString().substr(0,10));
    return this.http.get<PageInfo[]>("http://localhost:8080/UI-Confronter/compare-info", {params: params});
  }

  getOlderWebsite(pageUrl: string, date: Date): Observable<any> {
    let params = new HttpParams().set("url", pageUrl).set("localDate", date.toISOString().substr(0,10));
    return this.http.get("http://localhost:8080/UI-Confronter/get-older-link", {params: params});
  }

  getAllSavedWebsites(): Observable<any>{
    return this.http.get("http://localhost:8080/UI-Confronter/all");
  }

  saveData(oldPage:string, newPage:string){
    let savePage = new PageEntity(oldPage,newPage);
    return this.http.post("http://localhost:8080/UI-Confronter",savePage)
  }
}
