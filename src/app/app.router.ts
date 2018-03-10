import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // { path: '', redirectTo: 'core', pathMatch: 'full' },
  {
    path: '',
    loadChildren: 'app/core/core.module#CoreModule'
  },
  { path: '**', redirectTo: 'player' }
  // {
  //   path: 'error',
  //   component: ErrorComponent
  // },
  // { path: '**', redirectTo: 'error?type=404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
