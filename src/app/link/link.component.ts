import { Component, OnInit, Input } from '@angular/core';
import { Link } from '../models/link';
import { LinkService } from '../services/link.service';
import { DelLinkComponent } from '../dialogs/del-link/del-link.component';
import { BlockService } from '../services/block.service';
import { MdDialog } from '@angular/material';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {
  links: Link[];

  @Input()
  currentBlockId: number;

  constructor(private linkService: LinkService, public dialog: MdDialog) { }

  ngOnInit(): void {
    this.linkService.getLinks(this.currentBlockId).then(links => {this.links = links; });
  }
  deleteLink(link: Link) {
    const dialogRef = this.dialog.open(DelLinkComponent);
    dialogRef.componentInstance.delLink = link;
    dialogRef.afterClosed().subscribe(() => { this.linkService.getLinks(link.blockid); });
  }
}
