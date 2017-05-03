import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { ILuminary } from '../luminary/luminary.model';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'sciti-timeline-card',
    templateUrl: './timeline-card.component.html',
    styleUrls: ['timeline-card.component.scss']
})
export class TimelineCardComponent {
    @Input() luminary: ILuminary;
}
