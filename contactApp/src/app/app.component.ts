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
  onlyFavorites = false;

  constructor(private service: ContactService) {}

  ngOnInit(): void {
    this.fetchContactList(this.onlyFavorites);
  }

  fetchContactList(onlyFav: boolean): void {
    this.service.getContactList(onlyFav).subscribe(data => {
      this.contactList = data;
    });
  }

  handleUpdate(): void {
    this.fetchContactList(this.onlyFavorites);
  }

  createContact(event: Contact): void {
    this.service.addContact(event).subscribe(() => this.fetchContactList(this.onlyFavorites));
  }

  toggleView(onlyFav: boolean): void {
    this.onlyFavorites = !onlyFav;
    this.fetchContactList(this.onlyFavorites);
  }




}
