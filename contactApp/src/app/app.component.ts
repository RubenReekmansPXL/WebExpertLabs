import { Contact } from './models/contact.models';
import { Component, OnInit } from '@angular/core';
import { ContactService } from './services/contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  contactList: Contact[];

  constructor(private service: ContactService) { }
  ngOnInit(): void {
    this.contactList = this.service.getContactList();
  }
  createContact(event: Contact): void {
    this.service.addContact(event);
    this.contactList = this.service.getContactList();
  }
  
  handleUpdate(): void {
    this.contactList = this.service.getContactList();
  }


}
