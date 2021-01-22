import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {PageInfo} from "./models/PageInfo";
import {Observable} from "rxjs";
import {PageEntity} from "./models/pageEntity";
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  API_URL = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  getCompareData(pageUrl: string, date: Date): Observable<PageInfo[]> {
    let params = new HttpParams().set("url", pageUrl).set("localDate", date.toISOString().substr(0,10));
    return this.http.get<PageInfo[]>(this.API_URL+"/UI-Confronter/compare-info", {params: params});
  }

  getOlderWebsite(pageUrl: string, date: Date): Observable<any> {
    let params = new HttpParams().set("url", pageUrl).set("localDate", date.toISOString().substr(0,10));
    return this.http.get(this.API_URL+"/UI-Confronter/get-older-link", {params: params});
  }

  getAllSavedWebsites(): Observable<any>{
    return this.http.get(this.API_URL+"/UI-Confronter/all");
  }

  saveData(oldPage:string, newPage:string){
    let savePage = new PageEntity(oldPage,newPage);
    return this.http.post(this.API_URL+"/UI-Confronter",savePage);
  }

  deleteData(id:number){
    return this.http.delete(this.API_URL+"/UI-Confronter/"+id);
  }
}
