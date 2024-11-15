import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BlockOneComponent } from './components/block-one/block-one.component';
import { BlockTwoComponent } from './components/block-two/block-two.component';
import { BlockThreeComponent } from './components/block-three/block-three.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    BlockOneComponent,
    BlockTwoComponent,
    BlockThreeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
