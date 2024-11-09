import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message:string = '';
  passMessageToChild:string = '';


  onClickParentComponentButton() {
    this.passMessageToChild = this.message;
  }

  // received child event data update it self
  receiveChildEvent(eventData: string){
    //data update it self
    this.message = eventData;
    // pass receive child data to other child
    this.passMessageToChild = eventData;
  }
}
