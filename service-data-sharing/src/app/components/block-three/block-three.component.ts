import { Component } from '@angular/core';
import {SharedDataService} from "../../dependencies/shared.service";

@Component({
  selector: 'app-block-three',
  templateUrl: './block-three.component.html',
  styleUrls: ['./block-three.component.css']
})
export class BlockThreeComponent {
  inputMessage: string = '';

  constructor(private sharedService: SharedDataService) {
    // Subscribe to the currentData observable to get updates
    this.sharedService.currentData.subscribe(updatedData => {
      this.inputMessage = updatedData;
    });
  }


  onClickUpdateMessage() {
    console.log("Input text value: " + this.inputMessage);
    this.sharedService.updateData(this.inputMessage);
  }
}
