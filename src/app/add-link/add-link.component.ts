import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Link } from '../models/link';
import { ReactiveFormsModule, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-link',
  templateUrl: './add-link.component.html',
  styleUrls: ['./add-link.component.css']
})
export class AddLinkComponent implements OnInit {
  newLink: Link;
  linkFrm: FormGroup;
  title = new FormControl();
  url = new FormControl();

  constructor(private fb: FormBuilder, public dialogRef: MdDialogRef<AddLinkComponent>) {
    this.createForm();
  }

  ngOnInit() {

  }

  createForm() {
    this.linkFrm = this.fb.group({
      title: '',
      url: ''
    });
  }

  onSubmit(linkFrm) {
    this.newLink.title = this.title.value;
    this.newLink.Url = this.url.value;
    this.dialogRef.close();
  }

}
