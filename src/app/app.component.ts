import { Component, OnInit } from '@angular/core';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { EventService } from './event.service';
import { SomeComponent } from './some/some.component';
import { IEvent } from './event.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  events:IEvent[];
  event: IEvent;

  modalRef: BsModalRef;

  constructor(private modalService: BsModalService, private eventService:EventService) {}

  ngOnInit() {

    this.events =  this.eventService.getEvents();
  
   }


  afficher(eventId){

    
    this.event = this.eventService.getEvent(eventId);
    console.log(this.event);
    this.openModal(this.event);
  }


  openModal(dataEvent:IEvent){
    this.modalRef = this.modalService.show(SomeComponent, {
      initialState: {
        title: 'Modal title',
        data: dataEvent,
        hello: 'World'
      }
    });
  }
}
