import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { LinkService } from '../../services/link.service';
import { Link } from '../../models/link';

@Component({
  selector: 'app-del-link',
  templateUrl: './del-link.component.html',
  styleUrls: ['./del-link.component.css']
})
export class DelLinkComponent implements OnInit {
  public delLink: Link;

  constructor(public dialogRef: MdDialogRef<DelLinkComponent>, private linkService: LinkService) { }

  ngOnInit() {
  }
  Cancel() {
    this.dialogRef.close();
  }
  Delete() {
    this.linkService.deleteLink(this.delLink.id);
    this.dialogRef.close();
  }


}
