import {Component, OnInit} from '@angular/core';
import {SharedDataService} from "../../services/shared-data.service";

@Component({
  selector: 'app-sender-receiver-two',
  templateUrl: './sender-receiver-two.component.html',
  styleUrls: ['./sender-receiver-two.component.css']
})
export class SenderReceiverTwoComponent implements OnInit {
  textBoxInput: string = '';
  constructor(private sharedDataService: SharedDataService) {
  }

  sendData() {
    this.sharedDataService.sendData(this.textBoxInput);
  }

  ngOnInit() {
    this.sharedDataService.getSubjectData().subscribe((data) => {
      this.textBoxInput = data;
    })
  }

}
