import {Component, Input, OnInit} from '@angular/core';
import {LoaderService} from "../../loader/loader.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() compareWebsites:string;
  @Input() navigationLink:string

  constructor(public loaderService: LoaderService) {
  }

  ngOnInit(): void {
  }

}
