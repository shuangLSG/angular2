import { NgModule } from '@angular/core';
import { ContactComponent } from './contact.component';
import {ContactService} from './contact.service';

@NgModule({
  declarations: [ContactComponent],
  imports: [],
  providers:[ContactService]
})
export class ContactModule { }
