import {Component, OnInit} from '@angular/core';
import {SharedDataService} from "../../services/shared-data.service";

@Component({
  selector: 'app-sender-receiver-third',
  templateUrl: './sender-receiver-third.component.html',
  styleUrls: ['./sender-receiver-third.component.css']
})
export class SenderReceiverThirdComponent implements OnInit {
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
