import { Component, OnInit, ChangeDetectionStrategy, HostListener } from '@angular/core';

import { ILuminary } from '../luminary/luminary.model';
import { IScaleMarker } from '../timeline-scale/scale-marker.model';
import { LuminaryService } from '../luminary/luminary.service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'sciti-timeline-data',
    templateUrl: './timeline-data.component.html',
    styleUrls: ['./timeline-data.component.scss']
})
export class TimelineDataComponent implements OnInit {
    public colunms: number = 3;
    public pixelsPerYear: number = 24;
    public startYear: number = 1921;
    public luminaries: Array<ILuminary> = this.luminaryService.getLuminaries();
    public timelineScale: Array<IScaleMarker> = this.getScale();

    constructor(private luminaryService: LuminaryService) { }

    @HostListener('window:keydown', ['$event'])
    keyDown(event: KeyboardEvent) {
        if (event.keyCode === 40) {
            event.preventDefault();
        } else if (event.keyCode === 38) {
            event.preventDefault();
        }
    }

    @HostListener('window:keyup', ['$event'])
    keyUp(event: KeyboardEvent) {
        if (event.keyCode === 37) {
            this.colunms = this.colunms - 1;
            this.updateLuminariesHorizontal();
        } else if (event.keyCode === 39) {
            this.colunms = this.colunms + 1;
            this.updateLuminariesHorizontal();
        } else if (event.keyCode === 109 || event.keyCode === 189 || event.keyCode === 40) {
            event.preventDefault();
            this.pixelsPerYear = this.pixelsPerYear / 2;
            this.updateLuminariesVertical();
            this.updateScale();
        } else if (event.keyCode === 107 || event.keyCode === 187 || event.keyCode === 38) {
            event.preventDefault();
            this.pixelsPerYear = this.pixelsPerYear * 2;
            this.updateLuminariesVertical();
            this.updateScale();
        }
    }

    ngOnInit() {
        this.updateLuminariesHorizontal();
        this.updateLuminariesVertical();
        this.updateScale();
    }

    updateLuminariesHorizontal(): void {
        this.luminaries.forEach((luminary: ILuminary, index: number) => {
            luminary.offsetLeft = this.getHorizontalOffset(index);
            luminary.width = this.getWidth();
        });
    }

    updateLuminariesVertical(): void {
        this.luminaries.forEach((luminary: ILuminary, index: number) => {
            luminary.offsetTop = this.getVerticalOffset(luminary.birthDate);
        });
    }

    updateScale(): void {
        this.timelineScale.forEach((marker: IScaleMarker) => {
            marker.offsetTop = this.getVerticalOffset(marker.date);
        });
    }

    getVerticalOffset(dateUTC: string): number {
        const date: Date = new Date(dateUTC);
        const year: number = date.getUTCFullYear();
        const month: number = date.getUTCMonth();
        const offsetTop: number = ((this.startYear + 1 - year) * this.pixelsPerYear) - ((month + 1) * this.pixelsPerYear / 12);

        return offsetTop;
    }

    getHorizontalOffset(index: number): number {
        return (index % this.colunms * 100); // + (this.randomInteger(-60, 60) / 10);
        //return (index % this.colunms / this.colunms * 100); // + (this.randomInteger(-60, 60) / 10);
    }

    getWidth(): number {
        return 1 / this.colunms * 100;
    }

    randomInteger(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    getScale(): Array<IScaleMarker> {
        let years: Array<IScaleMarker> = [];
        let date: string;

        for (let i = 2000; i >= -640; i -= 10) {
            if(i >= 1000) {
                date = '' + i;
            } else if(i < 1000 && i >= 100) {
                date = '0' + i;
            } else if(i < 100 && i > 0) {
                date = '00' + i;
            } else if(i === 0) {
                date = '0000';
            } else if(i < 0 && i > -100) {
                date = '-0000' + Math.abs(i);
            } else if(i <= -100 && i > -1000) {
                date = '-000' + Math.abs(i);
            }

            years.push({
                date: date + '-01-01',
                period: Math.abs(i)
            });
        }

        return years;
    }
}
