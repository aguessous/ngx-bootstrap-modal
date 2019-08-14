import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { Some.componentComponent } from './some.component/some.component.component';
import { SomeComponent } from './some/some.component';

@NgModule({
   declarations: [
      AppComponent,
      Some.componentComponent,
      SomeComponent
   ],
   imports: [
      BrowserModule,
      ModalModule.forRoot()
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
