import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.models';

@Injectable()
export class ContactService {
  contactList: Contact[] = [
    new Contact('jane doe', 'jane.doe@mail.com', '0113448239', true, 'assets/avatar.png'),
    new Contact('john doe', 'john.doe@mail.com', '011424839', false, 'assets/avatar.png'),
    new Contact('Dries Swinnen', 'dries.swinnen@pxl.be', '011664839', true, 'assets/avatar.png')
  ];

  constructor() { }

  getContactList(): Contact[] {
    return this.contactList;
  }

  addContact(contact: Contact): void {
    this.contactList.push(contact);
  }

  toggleFavorite(index: number): void {
    this.contactList[index].isFavorite = !this.contactList[index].isFavorite;
  }
}
