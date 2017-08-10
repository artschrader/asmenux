import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  pages = [];
  constructor(private settingsService: SettingsService) {
  }
  ngOnInit() {
    this.pages = this.settingsService.Pages;
  }

}
