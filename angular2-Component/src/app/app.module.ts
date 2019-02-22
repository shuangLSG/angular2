import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { BigHeroDetailComponent,HeroDetailComponent } from './hero-detail.component';
import { heroSwitchComponents }   from './hero-switch.components';
import { HeroFormComponent }   from './hero-form.component';

import { ClickDirective } from './click.directive';
import { SizerComponent } from './sizer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    BigHeroDetailComponent,
    ClickDirective,
    SizerComponent,
    heroSwitchComponents,
    HeroFormComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
