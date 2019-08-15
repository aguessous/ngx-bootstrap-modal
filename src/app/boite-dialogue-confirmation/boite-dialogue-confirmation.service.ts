import { Injectable } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { BoiteDialogueConfirmationComponent } from './boite-dialogue-confirmation.component';

@Injectable()
export class BoiteDialogueConfirmationService {
modalRef: BsModalRef;
constructor( private modalService: BsModalService) { }
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
