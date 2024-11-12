import {Component, OnInit} from '@angular/core';
import {SharedService} from "../../dependencies/shared.service";

@Component({
  selector: 'app-block-one',
  templateUrl: './block-one.component.html',
  styleUrls: ['./block-one.component.css']
})
export class BlockOneComponent implements OnInit {
  inputMessage: string = '';

  constructor(private sharedService: SharedService) {

  }

  ngOnInit(): void {
    this.inputMessage = this.sharedService.getMessage();
  }


  onClickUpdateMessage() {
    this.sharedService.updateMessage(this.inputMessage);
  }

  onClickGetMessage() {
    this.inputMessage = this.sharedService.getMessage();
  }
}
