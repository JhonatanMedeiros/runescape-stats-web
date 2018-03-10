import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsModule } from 'ngx-bootstrap/tabs';

import { SharedModule } from '../shared/shared.module';

import { CoreRoutingModule } from './core.router';

import { PlayerComponent } from './player/player.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule,
    TabsModule.forRoot()
  ],
  declarations: [
    PlayerComponent,
    PlayerDetailComponent
  ]
})
export class CoreModule { }
