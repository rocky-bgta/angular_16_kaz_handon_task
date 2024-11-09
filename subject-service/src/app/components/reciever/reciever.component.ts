import {Component, OnInit} from '@angular/core';
import {SharedDataService} from "../../services/shared-data.service";

@Component({
  selector: 'app-reciever',
  template: `
    <h2>Subject: {{ subjectData}}</h2>
    <h2>BehaviorSubject: {{ behaviorSubjectData }}</h2>
  `
})
export class RecieverComponent implements OnInit {
  subjectData!: string;
  behaviorSubjectData!: string;

  constructor(private sharedDataService: SharedDataService) {

  }

  ngOnInit() {
    this.sharedDataService.getSubjectData().subscribe((data) => {
      this.subjectData = data;
    })

    this.sharedDataService.getBehaviorSubject().subscribe((data) => {
      this.behaviorSubjectData = data;
    })
  }
}
