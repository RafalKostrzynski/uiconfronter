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
    this._httpService.getAllSavedWebsites().subscribe(data=> {
      this.pageEntityList = data
    });
  }

  ngOnInit(): void {
  }
}
