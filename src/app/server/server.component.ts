import { Component } from '@angular/core';

// Indicating typescript that this is an angular component
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverId: number = 15;
    serverLocation: string = 'California';

    getServerLocation() {
        return this.serverLocation;
    }
}
