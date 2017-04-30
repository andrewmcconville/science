import { Component, HostListener } from '@angular/core';
import { IUserControls } from './user-controls.model';

@Component({
    selector: 'sciti-user-controls',
    templateUrl: './user-controls.component.html',
    styleUrls: ['user-controls.component.scss']
})
export class UserControlsComponent {
    public user: IUserControls = {
        showStats: false,
        showList: false,
        showLog: false,
        showSettings: false
    };

    @HostListener('window:keypress', ['$event'])
    keyPress(event: KeyboardEvent) {
        if (event.keyCode === 106) {
            this.toggleStats();
        } else if (event.keyCode === 107) {
            this.toggleList();
        } else if (event.keyCode === 108) {
            this.toggleLog();
        } else if (event.keyCode === 59) {
            this.toggleSettings();
        }
    }

    @HostListener('window:keyup', ['$event'])
    keyUp(event: KeyboardEvent) {
        if (event.keyCode === 27) {
            if (this.user.showList || this.user.showLog || this.user.showSettings || this.user.showStats) {
                this.closeAll();
            } else {
                this.toggleSettings();
            }
        }
    }

    toggleStats(): void {
        if (this.user.showStats) {
            this.closeAll();
        } else {
            this.closeAll();
            this.user.showStats = true;
        }
    }

    toggleList(): void {
        if (this.user.showList) {
            this.closeAll();
        } else {
            this.closeAll();
            this.user.showList = true;
        }
    }

    toggleLog(): void {
        if (this.user.showLog) {
            this.closeAll();
        } else {
            this.closeAll();
            this.user.showLog = true;
        }
    }

    toggleSettings(): void {
        if (this.user.showSettings) {
            this.closeAll();
        } else {
            this.closeAll();
            this.user.showSettings = true;
        }
    }

    closeAll(): void {
        this.user.showStats = false;
        this.user.showList = false;
        this.user.showLog = false;
        this.user.showSettings = false;
    }
}
