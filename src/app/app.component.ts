import { Component } from '@angular/core';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { SomeComponent } from './some/some.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) {}

  openModal(){
    this.modalRef = this.modalService.show(SomeComponent);
  }
}
