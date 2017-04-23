import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from './timeline.component';
import { LuminaryComponent } from './luminary/luminary.component';
import { timelineRouting } from './timeline.routes';

@NgModule({
  imports: [
    CommonModule,
    timelineRouting
  ],
  declarations: [
    TimelineComponent,
    LuminaryComponent
  ]
})
export class TimelineModule { }
