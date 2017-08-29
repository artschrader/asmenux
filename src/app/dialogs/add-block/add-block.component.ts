import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MdDialogRef } from '@angular/material';
import { BlockService } from '../../services/block.service';
import { Block } from '../../models/block';

@Component({
  selector: 'app-add-block',
  templateUrl: './add-block.component.html',
  styleUrls: ['./add-block.component.css']
})
export class AddBlockComponent implements OnInit {
  addBlock: Block;
  blockFrm: FormGroup;
  title = new FormControl();

  constructor(private fb: FormBuilder, public dialogRef: MdDialogRef<AddBlockComponent>, private blockService: BlockService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.blockFrm = this.fb.group({
      title: '',
      url: ''
    });
  }

  onSubmit(linkFrm) {
    this.blockService.addBlock(this.title.value);
    this.dialogRef.close();
  }

}
