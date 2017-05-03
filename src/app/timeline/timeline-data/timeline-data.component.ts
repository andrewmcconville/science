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
    public luminaries: Array<ILuminary> = this.luminaryService.getLuminaries();
    public timelineScale: Array<IScaleMarker> = this.getScale();

    constructor(private luminaryService: LuminaryService) { }

    @HostListener('window:keyup', ['$event'])
    keyUp(event: KeyboardEvent) {
        if (event.keyCode === 37) {
            this.colunms = this.colunms - 1;
            console.log(this.colunms);
            this.updateLuminaries();
        } else if (event.keyCode === 39) {
            this.colunms = this.colunms + 1;
            console.log(this.colunms);
            this.updateLuminaries();
        } else if (event.keyCode === 40) {
            this.pixelsPerYear = this.pixelsPerYear / 2;
            console.log(this.pixelsPerYear);
            this.updateLuminaries();
            this.updateScale();
        } else if (event.keyCode === 38) {
            this.pixelsPerYear = this.pixelsPerYear * 2;
            console.log(this.pixelsPerYear);
            this.updateLuminaries();
            this.updateScale();
        }
    }

    ngOnInit() {
        this.updateLuminaries();
    }

    updateLuminaries(): void {
        this.luminaries.forEach((luminary: ILuminary, index: number) => {
            luminary.offsetTop = this.setOffsetTop(luminary.birthDate);
            luminary.offsetLeft = this.setOffsetLeft(index);
        });
    }

    updateScale(): void {
        this.timelineScale.forEach((marker: IScaleMarker) => {
            marker.height = this.pixelsPerYear * 10;
        });
    }

    setOffsetTop(dateUTC: string): number {
        const date: Date = new Date(dateUTC);
        const year: number = date.getUTCFullYear();
        const month: number = date.getUTCMonth();
        const offsetTop: number = ((1921 - year) * this.pixelsPerYear) - ((month + 1) * this.pixelsPerYear / 12);

        return offsetTop;
    }

    setOffsetLeft(index: number): number {
        return (index % this.colunms / this.colunms * 100); // + (this.randomInteger(-60, 60) / 10);
    }

    randomInteger(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    getScale(): Array<IScaleMarker> {
        const years: Array<IScaleMarker> = [];

        for (let i = 2000; i > -630; i -= 10) {
            years.push({
                height: this.pixelsPerYear * 10,
                period: Math.abs(i)
            });
        }

        return years;
    }
}
