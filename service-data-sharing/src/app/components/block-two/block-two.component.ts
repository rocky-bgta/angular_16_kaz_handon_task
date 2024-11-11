import {Component} from '@angular/core';
import {SharedDataService} from "../../dependencies/shared.service";

@Component({
  selector: 'app-block-two',
  templateUrl: './block-two.component.html',
  styleUrls: ['./block-two.component.css']
})
export class BlockTwoComponent {
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
