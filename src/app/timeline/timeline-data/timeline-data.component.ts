import { Component, OnInit } from '@angular/core';

import { ILuminary } from '../luminary/luminary.model';
import { LuminaryService } from '../luminary/luminary.service';

@Component({
    selector: 'sciti-timeline-data',
    templateUrl: './timeline-data.component.html',
    styleUrls: ['./timeline-data.component.scss']
})
export class TimelineDataComponent implements OnInit {
    public luminaries: Array<ILuminary> = this.luminaryService.getLuminaries();
    public dateScale: Array<number> = this.scaleYears();

    constructor(private luminaryService: LuminaryService) { }

    ngOnInit() {
        this.luminaries.forEach((luminary: ILuminary, index: number) => {
            luminary.offsetTop = this.setOffsetTop(luminary.birthDate);
            luminary.offsetLeft = this.setOffsetLeft(index);
        });
    }

    setOffsetTop(dateUTC: string): number {
        const date: Date = new Date(dateUTC);
        const year: number = date.getUTCFullYear();
        const month: number = date.getUTCMonth();
        const pixelsPerYear: number = 24;
        const offsetTop: number = ((1921 - year) * pixelsPerYear) - ((month + 1) * pixelsPerYear / 12);

        return offsetTop;
    }

    setOffsetLeft(index: number): number {
        const colunms: number = 3;
        const offsetLeft: number = (index % colunms / colunms * 100) + (this.randomInteger(-60, 60) / 10);

        return offsetLeft;
    }

    randomInteger(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    scaleYears(): Array<number> {
        let years: Array<number> = [];

        for (let i = 2000; i > -630; i -= 10) {
            years.push(Math.abs(i));
        }

        return years;
    }
}
