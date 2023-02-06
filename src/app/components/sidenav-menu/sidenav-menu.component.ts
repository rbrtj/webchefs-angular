import { Component, OnInit } from '@angular/core';
import { SidenavButtons } from './sidenav-buttons';
@Component({
  selector: 'app-sidenav-menu',
  templateUrl: './sidenav-menu.component.html',
  styleUrls: ['./sidenav-menu.component.scss']
})
export class SidenavMenuComponent implements OnInit {

  sidenavButtons: any[] = [];
  isExpanded: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.sidenavButtons = SidenavButtons;
  }

  
}
