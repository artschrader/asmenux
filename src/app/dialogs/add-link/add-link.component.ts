import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Link } from '../../models/link';
import { ReactiveFormsModule, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LinkService } from '../../services/link.service';

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
  public blockId: number;

  constructor(private fb: FormBuilder, public dialogRef: MdDialogRef<AddLinkComponent>, private linkService: LinkService) {
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
    this.linkService.addLink(this.title.value, this.url.value, this.blockId);
    this.dialogRef.close();
  }

}
