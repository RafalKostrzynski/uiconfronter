import {Component, OnInit} from '@angular/core';
import {HttpServiceService} from "../../http-service.service";
import {PageInfo} from "../../models/PageInfo";

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  pagesInfo = [];

  constructor(private _httpService: HttpServiceService) {
  }

  ngOnInit(): void {
  }

  visitOldPage(pageUrl: string, date: Date) {
    window.open(pageUrl, "_blank");
  }

  fillTableWithData(pageUrl: string, date: Date) {
    this._httpService.getData().subscribe(data => this.pagesInfo = data);

  }

}
