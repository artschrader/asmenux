import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Link } from '../models/link';

@Component({
  selector: 'app-add-link',
  templateUrl: './add-link.component.html',
  styleUrls: ['./add-link.component.css']
})
export class AddLinkComponent implements OnInit {
  newLink: Link;

  constructor(public dialogRef: MdDialogRef<AddLinkComponent>) { }

  ngOnInit() {
    this.newLink = new Link();

  }


}
