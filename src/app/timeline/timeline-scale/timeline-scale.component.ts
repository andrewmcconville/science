import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'sciti-timeline-scale',
    templateUrl: './timeline-scale.component.html',
    styleUrls: ['timeline-scale.component.scss']
})
export class TimelineScaleComponent {
    @Input() period: number;
}
