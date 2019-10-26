import { Component } from '@angular/core';

// Indicating typescript that this is an angular component
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    userId: number = 100;
    userName: string = '';


    isUserNameEmpty() {
        if (this.userName == null || this.userName === '') { return true; } else { return false; }
    }
    
    userNameReset(event:Event){
        this.userName='';
    }





    serverId: number = 15;
    serverLocation: string = 'California';
    // this property is used to enable disable the button 
    addNewserver: boolean = false;
    serverCreationStatus: string = 'No new server was added.';
    serverName = '';
    displayServerStatus = false;

    constructor() {
        setTimeout(() => {
            this.addNewserver = true;
        }, 5000);
    }

    getServerLocation() {
        return this.serverLocation;
    }

    onaddServer() {
        this.displayServerStatus = true;
        this.serverCreationStatus = 'Server was added successfully';
    }

    getServerCreationStatus() {
        return this.serverCreationStatus;
    }

    onNgInit() {

    }

    onUpdateServerName(event: any) {

        this.serverName = event.target.value;
    }

    getServerName() {
        return this.serverName;
    }
}
