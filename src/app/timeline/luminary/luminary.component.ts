import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ILuminary } from './luminary.model';

@Component({
    selector: 'sciti-luminary',
    templateUrl: './luminary.component.html',
    styleUrls: ['./luminary.component.scss']
})
export class LuminaryComponent implements OnInit {
    luminary: ILuminary;

    constructor(
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
        this.luminary = {
            'name': 'Rosalind Franklin',
            'displayName': 'Franklin',
            'branch': 'physical',
            'professions': [
                'chemistry',
                'crystallography'
            ],
            'location': 'Notting Hill, London, England, UK',
            'birthDate': '1920-07-25',
            'deathDate': '1958-04-16',
            'published': '2016-06-05T17:00:00+05:00'
        };
    }

    private getLuminaryByRouteParam(): void {
        this.route.params.map((params: Params) => {
            return params['url'];
        }).subscribe((params: Params) => {
            console.log(params);
        })
    }

}
