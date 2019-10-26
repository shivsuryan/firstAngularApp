import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // template urls accepts single html.
  templateUrl: './app.component.html',
  // style urls accepts multiple style sheets as string array arguments.
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myFirstApp';
}
