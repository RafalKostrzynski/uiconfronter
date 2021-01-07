import { Component, OnInit } from '@angular/core';
import {HttpServiceService} from "../../../http-service.service";

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {
  dataSource:any[]=[];
  displayedColumns: string[] = ['createDate', 'oldPage', 'newPage'];

  constructor(private _httpService: HttpServiceService) { }

  ngOnInit(): void {
    this._httpService.getAllSavedWebsites().subscribe(data=>this.dataSource=data);
  }

}
