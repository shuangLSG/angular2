import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { delay }      from 'rxjs/operators';

export class Contact {
  constructor(public id:number,public name:string){}
}

const CONTACTS:Contact[]=[
  new Contact(21,'Yasha'),
  new Contact(22, 'Iulia'),
  new Contact(23, 'Karina')
];

const FETCH_LATENCY = 500;

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }
  getContacts():Observable<Contact[]>{
    return of(CONTACTS).pipe(delay(FETCH_LATENCY));
  }
}
