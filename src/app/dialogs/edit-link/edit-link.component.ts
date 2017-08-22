import { Component, OnInit, Input } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Link } from '../../models/link';
import { ReactiveFormsModule, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LinkService } from '../../services/link.service';
import { Observable } from 'rxjs/Observable';

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
  }

  ngOnInit() {
    this.createForm();
    this.patchData();
  }

  createForm() {
    this.linkFrm = this.fb.group({
      title: this.editLink.title,
      url: this.editLink.Url
    }
    );
  }
  patchData() {
    this.linkFrm.patchValue({
      title: this.editLink.title,
      url: this.editLink.Url
    });
  }

  onSubmit() {
    this.editLink.title = this.linkFrm.value.title;
    this.editLink.Url = this.linkFrm.value.url;
    this.linkService.updateLink(this.editLink);
    this.dialogRef.close();
  }

}
