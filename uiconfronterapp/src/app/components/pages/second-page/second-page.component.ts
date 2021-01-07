import { Component, OnInit } from '@angular/core';
import {HttpServiceService} from "../../../http-service.service";
import {PageEntity} from "../../../models/pageEntity";

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {
  pageEntityList:PageEntity[];

  constructor(private _httpService: HttpServiceService) {
    this.getData();
  }

  ngOnInit(): void {
  }

  deletePage(id:number){
    this._httpService.deleteData(id).subscribe();
    this.getData();
    throw new Error("Deleted successfully")
  }

  getData(){
    this._httpService.getAllSavedWebsites().subscribe(data=> {
      this.pageEntityList = data;
    });
  }
}
