import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  sharedData = {
    firstBlock: 'John',
    secondBlock: 'John',
  }

  blockInputText: string = 'Data from shared service';

  updateMessage(inputText: string) {
    this.blockInputText = inputText;
  }

  getMessage(): string {
    return this.blockInputText;
  }

}