import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ContactComponent }    from './contact.component';

const routes=[{path:'contact',component:ContactComponent}]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ContactRoutingModule { }
