import {Component, OnInit} from '@angular/core';
import {HttpServiceService} from "../../http-service.service";

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  pagesInfo:any[] = [];

  constructor(private _httpService: HttpServiceService) {
  }

  ngOnInit(): void {
  }

  validateUrl(url: string):boolean {
    const reg = new RegExp('^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([-.][a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$');
    return reg.test(url);
  }
  validateDate(date: Date):Date{
    if(date===null  || date.getTime()>Date.now()){
      throw new Error("Invalid date try again!");
    }
    return date;
  }

  visitOldPage(pageUrl: string, date: Date) {
    if (this.validateUrl(pageUrl)) {
      date=this.validateDate(date);
      let url: string;
      this._httpService.getOlderWebsite(pageUrl, date).subscribe(data => url = data);
      window.open(pageUrl, "_blank");
    } else {
      throw new Error("Invalid url try again!")
    }
  }

  fillTableWithData(pageUrl: string, date: Date) {
    if(this.validateUrl(pageUrl)) {
      date=this.validateDate(date);
      this._httpService.getCompareData(pageUrl, date).subscribe(data => this.pagesInfo = data);
    }else{
      throw new Error("Invalid url try again!")
    }
  }

  saveData(){
    this.pagesInfo.forEach(e=>{
      if(e.data.url===null){throw new Error("Wrong data try again!");}
    })
    let saved;
    this._httpService.saveData(this.pagesInfo[0].data.url,this.pagesInfo[1].data.url).subscribe(data=>saved=data);
    if(saved===undefined) throw new Error("Data saved successfully");
  }
}
