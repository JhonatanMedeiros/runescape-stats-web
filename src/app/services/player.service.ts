import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../environments/environment';

@Injectable()
export class PlayerService {

  constructor(
    private http: HttpClient
  ) { }


  getPlayer(playerName: string): Observable<any> {
    return this.http.get(environment.server_url + playerName);

  }


}
