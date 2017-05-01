import { Component, Input } from '@angular/core';

@Component({
    selector: 'sciti-timeline-scale',
    templateUrl: './timeline-scale.component.html',
    styleUrls: ['timeline-scale.component.scss']
})
export class TimelineScaleComponent {
    @Input() date: number;
}
