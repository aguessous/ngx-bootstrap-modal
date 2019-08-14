import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { SomeComponent } from './some/some.component';
import { EventService } from './event.service';

@NgModule({
   declarations: [
      AppComponent,
      SomeComponent
   ],
   imports: [
      BrowserModule,
      ModalModule.forRoot()
   ],
   providers: [EventService],
   bootstrap: [
      AppComponent
   ],
   entryComponents: [ SomeComponent ]
})
export class AppModule { }
