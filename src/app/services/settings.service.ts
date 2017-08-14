import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {

  constructor() { }
  Pages = ['Home', 'Admin'];
  BlockUrl = 'http://localhost:3000/blocks';
  LinkUrl = 'http://localhost:3000/links';
}
