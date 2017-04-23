import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimeMachineComponent } from './time-machine.component';
import { ChildComponent } from './child/child.component';

const timeMachineRoutes: Routes = [
  {
    path: '',
    component: TimeMachineComponent,
    children: [
      {
        path: 'child',
        component: ChildComponent
      }
    ]
  }
];
export const timeMachineRouting: ModuleWithProviders = RouterModule.forChild(timeMachineRoutes);
