import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScitiComponent } from './sciti.component';

const scitiRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'timeline' },
  { path: 'timeline', loadChildren: './timeline/timeline.module#TimelineModule' },
  { path: 'time-machine', loadChildren: './time-machine/time-machine.module#TimeMachineModule' },
  { path: '**', redirectTo: 'timeline' }
];

export const scitiRoutingProviders: any[] = [ ];

export const routing: ModuleWithProviders = RouterModule.forRoot(scitiRoutes);
