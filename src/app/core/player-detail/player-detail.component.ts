import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.scss'],
  providers: [ PlayerService ]
})
export class PlayerDetailComponent implements OnInit, OnDestroy {

  playerName: string;
  playerSkill: any[] = [];

  skillInProgress: boolean = false;
  notFound: boolean = false;

  // Subscription
  subscribe: Subscription;

  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private playerService: PlayerService
  ) { }

  ngOnInit() {

    this.subscribe = this.router.params.subscribe(params => {
      this.playerName = String(params['player-name']);

      if (!this.playerName) {
        this.route.navigate(['/player']);
      } else {
        this.searchPlayer(this.playerName);
      }

    });
  }

  ngOnDestroy() {

    if (this.subscribe) {
      this.subscribe.unsubscribe();
    }
  }




  /**
   * Services
   */

  searchPlayer(playerName: string): void {

    this.skillInProgress = true;
    this.notFound = false;

    this.playerService.getPlayer(playerName)
      .subscribe(
        res => {

          for (let key in res) {
            let obj = {
              name: key,
              level: res[key].level,
              exp: res[key].exp,
              rank: res[key].rank
            };

            this.playerSkill.push(obj);
          }

        },
        error => {

          this.playerSkill = [];
          this.skillInProgress = false;
          this.notFound = true;

        },
        () => {
          this.skillInProgress = false;
        }
      );

  }

  /**
   * Functions
   */


}
