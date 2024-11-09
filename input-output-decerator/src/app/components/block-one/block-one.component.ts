import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-block-one',
  templateUrl: './block-one.component.html',
  styleUrls: ['./block-one.component.css']
})
export class BlockOneComponent {

  @Input() receiveMessage: string = '';

  @Output() myEvent = new EventEmitter();

  emitEvent() {
    this.myEvent.emit(this.receiveMessage);
  }
}
