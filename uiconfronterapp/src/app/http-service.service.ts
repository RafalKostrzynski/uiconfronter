import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {PageInfo} from "./models/PageInfo";
import {Observable} from "rxjs";
import {PageEntity} from "./models/pageEntity";

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  private BACKEND_URL = 'http://r-backend-labproj20.apps.cp4apps.cloudpak.site';

  constructor(private http: HttpClient) {
  }

  getCompareData(pageUrl: string, date: Date): Observable<PageInfo[]> {
    let params = new HttpParams().set("url", pageUrl).set("localDate", date.toISOString().substr(0,10));
    return this.http.get<PageInfo[]>(this.BACKEND_URL+"/UI-Confronter/compare-info", {params: params});
  }

  getOlderWebsite(pageUrl: string, date: Date): Observable<any> {
    let params = new HttpParams().set("url", pageUrl).set("localDate", date.toISOString().substr(0,10));
    return this.http.get(this.BACKEND_URL+"/UI-Confronter/get-older-link", {params: params});
  }

  getAllSavedWebsites(): Observable<any>{
    return this.http.get(this.BACKEND_URL+"/UI-Confronter/all");
  }

  saveData(oldPage:string, newPage:string){
    let savePage = new PageEntity(oldPage,newPage);
    return this.http.post(this.BACKEND_URL+"/UI-Confronter",savePage);
  }

  deleteData(id:number){
    return this.http.delete(this.BACKEND_URL+"/UI-Confronter/"+id);
  }
}
