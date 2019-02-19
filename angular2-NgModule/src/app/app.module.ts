import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* App Root */
import { AppComponent } from './app.component';

/* Feature Modules */
import { ContactModule } from './contact/contact.module';
import { CoreModule } from './core/core.module';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports: [
    BrowserModule,
    ContactModule,
    CoreModule.forRoot({userName: 'Miss Marple'}),
    AppRoutingModule
  ],
  providers: [],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/