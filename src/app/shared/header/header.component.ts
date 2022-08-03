import { menuItems } from './../../utils/models/menu-items/menu-items';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  headerElements = menuItems ;
  constructor() { };
  ngOnInit(): void {
  }

}
