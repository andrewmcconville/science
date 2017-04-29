import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeMachineComponent } from './time-machine.component';
import { ChildComponent } from './child/child.component';
import { timeMachineRouting } from './time-machine.routes';

@NgModule({
  imports: [
    CommonModule,
    timeMachineRouting
  ],
  declarations: [
    TimeMachineComponent,
    ChildComponent
  ]
})
export class TimeMachineModule { }
