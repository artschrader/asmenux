import { Injectable, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { SettingsService } from './settings.service';
import 'rxjs/add/operator/toPromise';
import { Link } from '../models/link';


@Injectable()
export class LinkService implements OnInit {
  private linkUrl: string;
  private nextId: number;
  private link: Link;

  constructor(private http: Http, private settingsService: SettingsService) {
    this.linkUrl = this.settingsService.LinkUrl;
  }

  ngOnInit() {
  }

  getLinks(blockId: number): Promise<Link[]> {
    return this.http.get(this.linkUrl + '?blockid=' + blockId)
      .toPromise()
      .then(response => response.json() as Link[])
      .catch(this.handleError);
  }

  addLink(title: string, Url: string, blockid: number) {
//    this.getNextLinkId().then(result => {this.nextId = result});
    this.link = new Link;
    this.link.id = this.nextId;
    this.link.title = title;
    this.link.Url = Url;
    this.link.blockid = blockid;

    this.http
    .post(this.linkUrl, this.link)
    .subscribe();
  }

  getNextLinkId(): Promise<number> {
    return this.http.get(this.linkUrl)
      .toPromise()
      .then(response => response.json()[response.json().count - 1].id as number)
      .catch(this.handleError);
  }
    deleteLink(id: number) {
        this.http.delete(this.linkUrl + '/' + id)
        .toPromise()
        .catch(this.handleError);
    }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
