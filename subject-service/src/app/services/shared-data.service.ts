import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  private subjectData = new Subject<string>();
  private behaviorSubject: BehaviorSubject<string> = new BehaviorSubject<string>('initial value');


  // send data
  sendData(data: string){
    this.subjectData.next(data);
    this.behaviorSubject.next(data);
  }

  constructor() { }


  // received data
  getSubjectData(){
    return this.subjectData.asObservable();
  }

  getBehaviorSubject(){
    return this.behaviorSubject.asObservable();
  }
}
