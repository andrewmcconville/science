import { Injectable } from '@angular/core';

import { luminaries } from '../../api/luminaries';
import { ILuminary } from './luminary.model';

@Injectable()
export class LuminaryService {

    constructor() { }
    
    getLuminaries(): Array<ILuminary> {
        return luminaries;
    }

    getLuminaryByURL(url: string): ILuminary {
        let match: ILuminary;

        luminaries.map((luminary: ILuminary) => {
            if(luminary.url === url) {
                match = luminary
            }
        });

        return match
    }
}
