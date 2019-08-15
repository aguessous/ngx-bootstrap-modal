import { Component, Output, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-boite-dialogue-confirmation',
  templateUrl: './boite-dialogue-confirmation.component.html',
  styleUrls: ['./boite-dialogue-confirmation.component.css']
})
export class BoiteDialogueConfirmationComponent {
  title: string;
  message: string;
  options: string[];
  reponse: string = "";

  constructor(
    public bsModalRef: BsModalRef,
  ) { }

  repondre(reponse: string) {
    this.reponse = reponse;

    this.bsModalRef.hide();
  }

}