import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { PlayerComponent } from './player/player.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { HiscoresComponent } from './hiscores/hiscores.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  { path: '', redirectTo: 'player', pathMatch: 'full' },
  {
    path: 'player',
    component: PlayerComponent,
  },
  {
    path: 'player/:player-name',
    component: PlayerDetailComponent
  },
  {
    path: 'hiscores',
    component: HiscoresComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
