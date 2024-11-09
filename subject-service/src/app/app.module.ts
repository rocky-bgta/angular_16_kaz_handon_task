import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {SenderComponent} from './components/sender/sender.component';
import {RecieverComponent} from './components/reciever/reciever.component';
import {SharedDataService} from "./services/shared-data.service";
import {FormsModule} from "@angular/forms";
import { SecondRecieverComponent } from './components/second-reciever/second-reciever.component';
import { SenderReceiverComponent } from './components/sender-receiver/sender-receiver.component';
import { SenderReceiverTwoComponent } from './components/sender-receiver-two/sender-receiver-two.component';
import { SenderReceiverThirdComponent } from './components/sender-receiver-third/sender-receiver-third.component';


@NgModule({
  declarations: [
    AppComponent,
    SenderComponent,
    RecieverComponent,
    SecondRecieverComponent,
    SenderReceiverComponent,
    SenderReceiverTwoComponent,
    SenderReceiverThirdComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [
    SharedDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
