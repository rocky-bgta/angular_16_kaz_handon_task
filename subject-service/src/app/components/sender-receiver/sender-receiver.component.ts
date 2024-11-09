import {Component, OnInit} from '@angular/core';
import {SharedDataService} from "../../services/shared-data.service";

@Component({
  selector: 'app-sender-receiver',
  templateUrl: './sender-receiver.component.html',
  styleUrls: ['./sender-receiver.component.css']
})
export class SenderReceiverComponent implements OnInit {
  textBoxInput: string = '';
  //receivedData: string = '';
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
