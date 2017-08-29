import { Component, OnInit } from '@angular/core';
import { Block } from '../models/block';
import { BlockService } from '../services/block.service';
import { MdDialog } from '@angular/material';
import { AddLinkComponent } from '../dialogs/add-link/add-link.component';
import { Link } from '../models/link';
import { MdGridList } from '@angular/material';
import { BlockStoreService } from "../services/block-store.service";


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


  constructor(private blockStoreService: BlockStoreService, public dialog: MdDialog) { 
  
  }

  ngOnInit(): void {
    this.getBlocks();
  }
  getBlocks() {
   this.blockStoreService.getBlocks()
                          .subscribe(blocks => { this.blocks = blocks; });
  }
  OnClick(event) {
    console.log(event);
  }
  OpenDialog(id: number) {
    const dialogRef = this.dialog.open(AddLinkComponent);
    dialogRef.componentInstance.blockId = id;
    dialogRef.afterClosed().subscribe(() => { this.getBlocks(); });
  }
  deleteBlock(id: number){

  }
}
