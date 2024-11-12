import {Component, DoCheck, OnInit} from '@angular/core';
import {SharedService} from "../../dependencies/shared.service";

@Component({
  selector: 'app-block-two',
  templateUrl: './block-two.component.html',
  styleUrls: ['./block-two.component.css']
})
export class BlockTwoComponent implements OnInit {
  inputMessage: string = '';

  constructor(private sharedService: SharedService) {

  }

  ngOnInit(): void {
    this.inputMessage = this.sharedService.getMessage();
  }


  onClickUpdateMessage() {
    this.sharedService.updateMessage(this.inputMessage);
  }

/*  ngDoCheck() {
    this.inputMessage = this.sharedService.getMessage();
    console.log("DO CHECK FROM SECOND BLOCK")
  }*/
}
