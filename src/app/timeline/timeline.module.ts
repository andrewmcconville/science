import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { timelineRouting } from './timeline.routes';

import { TimelineComponent } from './timeline.component';
import { UiTimelineComponent } from './ui-timeline/ui-timeline.component';
import { UiUserComponent } from './ui-user/ui-user.component';
import { LuminaryComponent } from './luminary/luminary.component';

@NgModule({
  imports: [
    CommonModule,
    timelineRouting
  ],
  declarations: [
    TimelineComponent,
    LuminaryComponent,
    UiTimelineComponent,
    UiUserComponent
  ]
})
export class TimelineModule { }
