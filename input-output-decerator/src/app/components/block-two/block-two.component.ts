import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-block-two',
  templateUrl: './block-two.component.html',
  styleUrls: ['./block-two.component.css']
})
export class BlockTwoComponent {

  @Input() receiveMessage: string = '';

  @Output() myEvent = new EventEmitter();

  emitEvent() {
    this.myEvent.emit(this.receiveMessage);
  }
}
