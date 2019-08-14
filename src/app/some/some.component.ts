import { Component, OnInit } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap/modal';
import { IEvent } from '../event.module';

@Component({
  selector: 'app-some',
  templateUrl: './some.component.html',
  styleUrls: ['./some.component.css']
})
export class SomeComponent implements OnInit {
  data:IEvent;
  title;
  hello;
  constructor(public modalRef: BsModalRef) {}

  ngOnInit() {
  }

}
