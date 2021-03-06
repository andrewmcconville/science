import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { timelineRouting } from './timeline.routes';

import { TimelineCardComponent } from './timeline-card/timeline-card.component';
import { TimelineComponent } from './timeline.component';
import { TimelineControlsComponent } from './timeline-controls/timeline-controls.component';
import { TimelineDataComponent } from './timeline-data/timeline-data.component';
import { TimelineScaleComponent } from './timeline-scale/timeline-scale.component';
import { LuminaryComponent } from './luminary/luminary.component';
import { LuminaryService } from './luminary/luminary.service';
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
    TimelineCardComponent,
    TimelineComponent,
    TimelineControlsComponent,
    TimelineDataComponent,
    TimelineScaleComponent,
    LuminaryComponent,
    TimelineControlsComponent,
    UserControlsComponent,
    UserLogComponent,
    UserListComponent,
    UserSettingsComponent,
    UserStatsComponent
  ],
  providers: [
    LuminaryService
  ]
})
export class TimelineModule { }
