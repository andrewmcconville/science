import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ILuminary } from './luminary.model';
import { LuminaryService } from '../luminary/luminary.service';

@Component({
    selector: 'sciti-luminary',
    templateUrl: './luminary.component.html',
    styleUrls: ['./luminary.component.scss']
})
export class LuminaryComponent implements OnInit {
    luminary: ILuminary;

    constructor(
        private luminaryService: LuminaryService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    @HostListener('window:keyup', ['$event'])
    keyUp(event: KeyboardEvent) {
        if (event.keyCode === 27) {
            this.router.navigate(['/timeline']);
        }
    }

    ngOnInit(): void {
        this.getLuminaryByRouteParam();
    }

    getLuminaryByRouteParam(): void {
        this.route.params.map((params: Params) => {
            return {url: params['url']};
        }).subscribe((params: Params) => {
            this.luminary = this.luminaryService.getLuminaryByURL(params.url);
        })
    }
}
