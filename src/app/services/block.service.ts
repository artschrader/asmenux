import { Injectable, OnInit } from '@angular/core';
import { Block } from '../models/block';
import { Http } from '@angular/http';
import { SettingsService } from './settings.service';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BlockService implements OnInit {
   private blockUrl: string;
   block = new Block();


    constructor(private http: Http, private settingsService: SettingsService ) {
      this.blockUrl = this.settingsService.BlockUrl;
    }

    ngOnInit () {
    }

    getBlocks(): Promise<Block[]> {
    return this.http.get(this.blockUrl)
              .toPromise()
              .then(response => response.json() as Block[])
              .catch(this.handleError);
    }
    addBlock(title: string){
      this.block.title = title;
      this.http
      .post(this.blockUrl, this.block)
      .subscribe();
    }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
