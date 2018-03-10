import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  playerInput: string = '';

  constructor(
    private route: Router
  ) { }

  ngOnInit() {
  }



  searchPlayer(): void {

    this.route.navigate(['player/' + this.playerInput]);

  }

}
