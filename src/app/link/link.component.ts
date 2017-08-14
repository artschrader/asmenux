import { Component, OnInit, Input } from '@angular/core';
import { Link } from '../models/link';
import { LinkService } from '../services/link.service';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {
  links: Link[];

  @Input()
  currentBlockId: number;

  constructor(private linkService: LinkService) { }

  ngOnInit(): void {
    this.linkService.getLinks(this.currentBlockId).then(links => {this.links = links; });
  }

}
