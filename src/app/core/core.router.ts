import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { PlayerComponent } from './player/player.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';


const routes: Routes = [
  { path: '', redirectTo: 'player', pathMatch: 'full' },
  {
    path: 'player',
    component: PlayerComponent,
  },
  {
    path: 'player/:player-name',
    component: PlayerDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
