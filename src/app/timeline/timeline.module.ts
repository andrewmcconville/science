import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { timelineRouting } from './timeline.routes';

import { TimelineComponent } from './timeline.component';
import { TimelineControlsComponent } from './timeline-controls/timeline-controls.component';
import { LuminaryComponent } from './luminary/luminary.component';
import { UserControlsComponent } from './user-controls/user-controls.component';
import { UserLogComponent } from './user-log/user-log.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { UserStatsComponent } from './user-stats/user-stats.component';

@NgModule({
  imports: [
    CommonModule,
    timelineRouting
  ],
  declarations: [
    TimelineComponent,
    LuminaryComponent,
    TimelineControlsComponent,
    UserControlsComponent,
    UserLogComponent,
    UserListComponent,
    UserSettingsComponent,
    UserStatsComponent
  ]
})
export class TimelineModule { }
