import {Component, OnInit} from '@angular/core';
import {SharedService} from "../../dependencies/shared.service";

@Component({
  selector: 'app-block-three',
  templateUrl: './block-three.component.html',
  styleUrls: ['./block-three.component.css']
})
export class BlockThreeComponent implements OnInit {
  inputMessage: string = '';

  constructor(private sharedService: SharedService) { }

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
