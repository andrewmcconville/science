import { Component } from '@angular/core';

import { TimelineUIService } from './timeline-ui.service'

@Component({
    selector: 'sciti-timeline',
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {
    constructor(
        private timelineUIService: TimelineUIService
    ) { }
}
