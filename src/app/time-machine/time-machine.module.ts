import { NgModule } from '@angular/core';
import { TimeMachineComponent } from './time-machine.component';
import { ChildComponent } from './child/child.component';
import { timeMachineRouting } from './time-machine.routes';

@NgModule({
  imports: [
    timeMachineRouting
  ],
  declarations: [
    TimeMachineComponent,
    ChildComponent
  ]
})
export class TimeMachineModule { }
