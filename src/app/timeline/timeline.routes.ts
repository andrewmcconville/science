import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimelineComponent } from './timeline.component';
import { LuminaryComponent } from './luminary/luminary.component';

const timelineRoutes: Routes = [
  {
    path: '',
    component: TimelineComponent,
    children: [
      {
        path: 'luminary',
        component: LuminaryComponent
      }
    ]
  }
];
export const timelineRouting: ModuleWithProviders = RouterModule.forChild(timelineRoutes);
