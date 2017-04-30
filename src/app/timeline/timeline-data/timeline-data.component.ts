import { Component, OnInit } from '@angular/core';

import { ILuminary } from './luminary.model';
import { luminaries } from '../../api/luminaries';

@Component({
    selector: 'sciti-timeline-data',
    templateUrl: './timeline-data.component.html',
    styleUrls: ['./timeline-data.component.scss']
})
export class TimelineDataComponent implements OnInit {
    public luminaries: Array<ILuminary> = luminaries;

    constructor() { }

    ngOnInit() {
        console.dir(luminaries.reverse());
        this.luminaries.forEach((luminary: ILuminary) => {
            luminary.offset = this.setVerticalOffset(luminary.birthDate);
        });
    }

    setVerticalOffset(birthDate: string): number {
        let dateFull: Date = new Date(birthDate);
        let yearUTC: number = dateFull.getUTCFullYear();
        //let monthUTC: number = dateFull.getUTCMonth();
        //let dateUTC: number = dateFull.getUTCDate();
        let offset: number = (2000 - yearUTC) * 4;

        return offset;
    }
}
