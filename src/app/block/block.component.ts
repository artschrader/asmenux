import { Component, OnInit } from '@angular/core';
import { Block } from '../models/block';
import { BlockService } from '../services/block.service';
import { MdDialog } from '@angular/material';
import { AddLinkComponent } from '../add-link/add-link.component';


@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {
  blocks: Block[];
  retVal: string;

  constructor(private blockService: BlockService, public dialog: MdDialog) { }

  ngOnInit(): void {
    this.blockService.getBlocks().then(blocks => { this.blocks = blocks; });
  }
  OnClick(event) {
    console.log(event);
  }
  OpenDialog() {
    let dialogRef = this.dialog.open(AddLinkComponent);
    dialogRef.afterClosed().subscribe(result => {this.retVal = result;})
  }
}
