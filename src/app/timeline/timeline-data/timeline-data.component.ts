import { Component } from '@angular/core';

import { ILuminary } from './luminary.model';
import { luminaries } from '../../api/luminaries';

@Component({
    selector: 'sciti-timeline-data',
    templateUrl: './timeline-data.component.html',
    styleUrls: ['./timeline-data.component.scss']
})
export class TimelineDataComponent {
    public luminaries: Array<ILuminary> = luminaries;

    constructor() { }
}
