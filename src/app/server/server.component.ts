import { Component } from '@angular/core';

// Indicating typescript that this is an angular component
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverId: number = 15;
    serverLocation: string = 'California';
    // this property is used to enable disable the button 
    addNewserver: boolean = false;

    constructor() {
        setTimeout(() => {
            this.addNewserver = true;
        }, 5000);
    }

    getServerLocation() {
        return this.serverLocation;
    }
}
