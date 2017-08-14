import { Injectable, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { SettingsService } from './settings.service';
import 'rxjs/add/operator/toPromise';
import { Link } from '../models/link';


@Injectable()
export class LinkService implements OnInit {
   private linkUrl: string;

    constructor(private http: Http, private settingsService: SettingsService ) {
      this.linkUrl = this.settingsService.LinkUrl;
    }

    ngOnInit () {
    }

    getLinks(blockId: number): Promise<Link[]> {
    return this.http.get(this.linkUrl + '?blockid=' + blockId)
              .toPromise()
              .then(response => response.json() as Link[])
              .catch(this.handleError);
    }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
