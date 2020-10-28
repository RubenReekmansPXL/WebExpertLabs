import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Contact } from '../models/contact.models';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  @Output() onSubmit: EventEmitter<Contact> = new EventEmitter();
  constructor() { }
  name: string;
  email: string;
  phone: string;
  isFavorite: boolean;
  avatar: string;

  submit(form): void {
    const contact: Contact = new Contact(
      form.value.name,
      form.value.email,
      form.value.phone,
      form.value.isFavorite,
      form.value.avatar
    );
    form.reset();
    this.onSubmit.emit(contact);
  }


  ngOnInit(): void {
  }

}
