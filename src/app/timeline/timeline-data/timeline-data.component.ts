import { Component, OnInit } from '@angular/core';

import { ILuminary } from '../luminary/luminary.model';
import { luminaries } from '../../api/luminaries';

@Component({
    selector: 'sciti-timeline-data',
    templateUrl: './timeline-data.component.html',
    styleUrls: ['./timeline-data.component.scss']
})
export class TimelineDataComponent implements OnInit {
    public luminaries: Array<ILuminary> = luminaries;
    public dateScale: Array<number> = this.scaleYears();

    constructor() { }

    ngOnInit() {
        this.luminaries.forEach((luminary: ILuminary, index: number) => {
            luminary.offsetTop = this.setOffsetTop(luminary.birthDate);
            luminary.offsetLeft = this.setOffsetLeft(index);
        });
    }

    setOffsetTop(birthDate: string): number {
        const dateFull: Date = new Date(birthDate);
        const yearUTC: number = dateFull.getUTCFullYear();
        const pixelsPerYear: number = 24;
        let offsetTop: number = ((1921 - yearUTC) * pixelsPerYear);

        if(yearUTC < 2000 && yearUTC >= 1900) {
            offsetTop = (offsetTop / 1) - ((dateFull.getUTCMonth() + 1) * pixelsPerYear / 12);
        } else if(yearUTC < 1900 && yearUTC >= 1700) {
            offsetTop = (offsetTop / 1) - ((dateFull.getUTCMonth() + 1) * pixelsPerYear / 12);
        } else if(yearUTC < 1700 && yearUTC >= 1300) {
            offsetTop = (offsetTop / 1) - ((dateFull.getUTCMonth() + 1) * pixelsPerYear / 12);
        } else if(yearUTC < 1300 && yearUTC >= 500) {
            offsetTop = (offsetTop / 1) - ((dateFull.getUTCMonth() + 1) * pixelsPerYear / 12);
        } else {
            offsetTop = (offsetTop / 1) - ((dateFull.getUTCMonth() + 1) * pixelsPerYear / 12);
        }

        return offsetTop;
    }

    setOffsetLeft(index: number): number {
        const colunms: number = 8;
        const offsetLeft: number = (index % colunms / colunms * 100) + this.randomInteger(-6, 6);

        return offsetLeft;
    }

    randomInteger(min: number, max: number): number {
        return 0 //Math.floor(Math.random() * (max - min + 1) + min);
    }
}
