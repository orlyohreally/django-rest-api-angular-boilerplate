import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GlobalVariablesService {
  constructor() {}

  get staticUrl() {
    return environment.staticUrl;
  }
}
