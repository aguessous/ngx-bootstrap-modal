import { Component, OnInit } from '@angular/core';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { EventService } from './event.service';
import { SomeComponent } from './some/some.component';
import { IEvent } from './event.module';
import { Observable } from 'rxjs';
import { BoiteDialogueConfirmationComponent } from './boite-dialogue-confirmation/boite-dialogue-confirmation.component';
import { BoiteDialogueConfirmationService } from './boite-dialogue-confirmation/boite-dialogue-confirmation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  events:IEvent[];
  event: IEvent;

  modalRef: BsModalRef;

  constructor(private modalService: BsModalService, 
              private eventService:EventService,
              private boiteDialogueService: BoiteDialogueConfirmationService) {}

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

  confirmer() {
    this.boiteDialogueService.ouvrirDialogueConfirmation(
      "Confirmation !",
      "Etes vous sur de votre choix ?",
      ["Oui", "Non"])
      .subscribe((reponse) => {
        console.log(reponse);
      });
  }

  ouvrirDialogueConfirmation(titre: string, message: string, options: string[]): Observable<string> {
    const initialState = {
      titre: titre,
      message: message,
      options: options,
      reponse: "",
    };
    this.modalRef = this.modalService.show(BoiteDialogueConfirmationComponent, { initialState });

    return new Observable<string>(this.getConfirmSubscriber());
  }

  private getConfirmSubscriber() {
    return (observer) => {
      const subscription = this.modalService.onHidden.subscribe((reason: string) => {
        observer.next(this.modalRef.content.reponse);
        observer.complete();
      });

      return {
        unsubscribe() {
          subscription.unsubscribe();
        }
      };
    }
  }

}
