import { Component, OnInit } from '@angular/core';
import { SettingsService } from './services/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  pages = [];
  constructor(private settingsService: SettingsService) {
  }
  ngOnInit() {
    this.pages = this.settingsService.Pages;
  }
}
