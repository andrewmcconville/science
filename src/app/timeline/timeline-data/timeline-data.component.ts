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

            // if( luminary.name.charAt((luminary.name.indexOf(' ')) + 1) == 'v' ||
            //     luminary.name.charAt((luminary.name.indexOf(' ')) + 1) == 'd' ||
            //     luminary.name.charAt((luminary.name.indexOf(' ')) + 1) == 'o' ||
            //     luminary.name.charAt((luminary.name.indexOf(' ')) + 1) == 't' ||
            //     (luminary.name.charAt((luminary.name.indexOf(' ')) + 1) == 'L' && luminary.name.charAt((luminary.name.indexOf(' ')) + 2) == 'e' && luminary.name.charAt((luminary.name.indexOf(' ')) + 3) == ' ')
            // ) {
            //     luminary.url = luminary.name.toLowerCase().replace(/\s/g, "-");
            //     console.log(luminary.url)
            // } else if (luminary.name.indexOf(' ') == -1) {
            //     luminary.url = luminary.name.toLowerCase();
            //     console.log(luminary.url);
            // } else {
            //     const firstName: string = luminary.name.slice(0, luminary.name.indexOf(' '));
            //     const lastName: string = luminary.name.slice(luminary.name.lastIndexOf(' ') + 1, luminary.name.length);
            //     luminary.url = firstName.toLowerCase()+'-'+lastName.toLowerCase();
            //     console.log(luminary.url)
            // }

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
