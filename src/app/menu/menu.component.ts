import { Component, OnInit, ApplicationRef } from '@angular/core';
import { SettingsService } from '../services/settings.service';
import {HttpModule} from '@angular/http';
import { MdDialog } from '@angular/material';
import { AddBlockComponent } from '../dialogs/add-block/add-block.component';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  pages = [];
  constructor(private settingsService: SettingsService, public dialog: MdDialog, private applicationRef: ApplicationRef, private sharedService: SharedService) {
  }
  ngOnInit() {
    this.pages = this.settingsService.Pages;
  }
  NewDialog(){
    const dialogRef = this.dialog.open(AddBlockComponent);
    dialogRef.afterClosed().subscribe(() => { this.sharedService.blockRenderFn(); });
  }
}
