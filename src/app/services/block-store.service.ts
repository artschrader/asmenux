import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import { BlockService } from './block.service';
import { Block } from '../models/block';

@Injectable()
export class BlockStoreService {

  private blocks: Block[];
  public readonly block$: Observable<Block[]> = Observable.of(this.blocks);

  constructor(private blockService: BlockService) {
    this.loadInitialData();
   }

   loadInitialData () {
    this.blockService.getBlocks().then(blocks => { this.blocks = blocks; });
   }

   public getBlocks(): Observable<any> {
     return Observable.of(this.blocks) ;
   }
   public addBlock(title: string){
     this.blockService.addBlock(title);
    this.getBlocks();
   }
}
