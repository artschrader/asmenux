import { Component, OnInit, Input } from '@angular/core';
import { Link } from '../models/link';
import { LinkService } from '../services/link.service';
import { DelLinkComponent } from '../dialogs/del-link/del-link.component';
import { EditLinkComponent } from '../dialogs/edit-link/edit-link.component';
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
    this.getLinks(this.currentBlockId);
  }
  getLinks(id: number) {
    this.linkService.getLinks(id).then(links => {this.links = links; });
  }
  deleteLink(link: Link) {
    const dialogRef = this.dialog.open(DelLinkComponent);
    dialogRef.componentInstance.delLink = link;
    dialogRef.afterClosed().subscribe(() => { this.getLinks(link.blockid); });
  }
   editLink(link: Link) {
    const dialogRef = this.dialog.open(EditLinkComponent);
    dialogRef.componentInstance.editLink = link;
    dialogRef.afterClosed().subscribe(() => { this.getLinks(link.blockid); });
  }
}
