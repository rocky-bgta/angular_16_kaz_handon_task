import {Component, DoCheck, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {SharedService} from "../../dependencies/shared.service";

@Component({
  selector: 'app-block-two',
  templateUrl: './block-two.component.html',
  styleUrls: ['./block-two.component.css']
})
export class BlockTwoComponent implements OnInit, OnChanges, DoCheck {
  inputMessage: string = '';

  constructor(private sharedService: SharedService) {

  }

  ngOnChanges(changes: SimpleChanges): void {
  //  this.inputMessage = this.sharedService.getMessage()
  }

  ngOnInit(): void {
    this.inputMessage = this.sharedService.getMessage();
  }


  onClickUpdateMessage() {
    this.sharedService.updateMessage(this.inputMessage);
  }

  ngDoCheck(){
    this.inputMessage = this.sharedService.getMessage();
    console.log("DO CHECK")
  }
}
