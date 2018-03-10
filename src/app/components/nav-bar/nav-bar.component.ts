import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  playerInput: string = '';

  constructor(
    private route: Router
  ) { }

  ngOnInit() {
  }


  searchPlayer(): void {

    console.log(this.playerInput);

    this.route.navigate(['player/' + this.playerInput]);

  }

}
