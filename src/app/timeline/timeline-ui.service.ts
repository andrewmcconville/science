import { Injectable } from '@angular/core';

@Injectable()
export class TimelineUIService {
    public userStats: boolean = false;
    
    constructor() { }

    toggleUserStats(): void {
        this.userStats = !this.userStats;
        console.log(this.userStats);
    }
}
