import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Link } from '../../models/link';
import { ReactiveFormsModule, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LinkService } from '../../services/link.service';

@Component({
  selector: 'app-edit-link',
  templateUrl: './edit-link.component.html',
  styleUrls: ['./edit-link.component.css']
})
export class EditLinkComponent implements OnInit {
  public editLink: Link;
  linkFrm: FormGroup;
  title = new FormControl();
  url = new FormControl();
  public blockId: number;

  constructor(private fb: FormBuilder, public dialogRef: MdDialogRef<EditLinkComponent>, private linkService: LinkService) {
    this.createForm();
  }

  ngOnInit() {

  }

  createForm() {
    this.linkFrm = this.fb.group({
      title: this.editLink.title,
      url: this.editLink.Url
    }
    );
  }

  onSubmit(linkFrm) {
    this.editLink.title = linkFrm.title;
    this.editLink.Url = linkFrm.url;
    this.linkService.updateLink(this.editLink);
    this.dialogRef.close();
  }

}
