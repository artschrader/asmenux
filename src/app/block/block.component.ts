import { Component, OnInit } from '@angular/core';
import { Block } from '../models/block';
import { BlockService } from '../services/block.service';
import { MdDialog } from '@angular/material';
import { AddLinkComponent } from '../add-link/add-link.component';
import { Link } from '../models/link';


@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {
  blocks: Block[];
  retVal: string;
  newLink: Link;
  Title: string;
  Url: string;

  constructor(private blockService: BlockService, public dialog: MdDialog) { }

  ngOnInit(): void {
    this.blockService.getBlocks().then(blocks => { this.blocks = blocks; });
  }
  OnClick(event) {
    console.log(event);
  }
  OpenDialog() {
    this.newLink = new Link();
    const dialogRef = this.dialog.open(AddLinkComponent);
  }
}
