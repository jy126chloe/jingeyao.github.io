import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  activeTab: string = '';
  constructor( ) {}
  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
  ngOnInit(): void {
  }
}