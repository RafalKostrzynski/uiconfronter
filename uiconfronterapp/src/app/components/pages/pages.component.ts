import { Component, OnInit } from '@angular/core';
import {HttpServiceService} from "../../http-service.service";
import {PageInfo} from "../../models/PageInfo";

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  public pagesInfo=[];
  public pageUrl:string;
  public date:string;

  constructor(private _httpService:HttpServiceService) { }

  ngOnInit(): void{
  }

  visitOldPage(){
  }

  fillTableWithData(){
    this._httpService.getData().subscribe(data=>this.pagesInfo=data);

  }

}
