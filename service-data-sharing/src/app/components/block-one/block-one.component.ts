import {Component, OnInit} from '@angular/core';
import {SharedDataService} from "../../dependencies/shared.service";


@Component({
  selector: 'app-block-one',
  templateUrl: './block-one.component.html',
  styleUrls: ['./block-one.component.css']
})
export class BlockOneComponent {
  inputMessage: string = '';

  constructor(private sharedService: SharedDataService) {
    this.sharedService.currentData.subscribe(updatedData => {
      this.inputMessage = updatedData;
    });
  }




  onClickUpdateMessage() {
    this.sharedService.updateData(this.inputMessage);
  }
}
