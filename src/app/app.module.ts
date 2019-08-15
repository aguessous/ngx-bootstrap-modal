import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { SomeComponent } from './some/some.component';
import { EventService } from './event.service';
import { BoiteDialogueConfirmationComponent } from './boite-dialogue-confirmation/boite-dialogue-confirmation.component';
import { BoiteDialogueConfirmationService } from './boite-dialogue-confirmation/boite-dialogue-confirmation.service';

@NgModule({
   declarations: [
      AppComponent,
      SomeComponent,
      BoiteDialogueConfirmationComponent
   ],
   imports: [
      BrowserModule,
      ModalModule.forRoot()
   ],
   providers: [
      EventService,
      BoiteDialogueConfirmationService
   ],
   bootstrap: [
      AppComponent
   ],
   entryComponents: [
      SomeComponent,
      BoiteDialogueConfirmationComponent
   ]
})
export class AppModule { }
