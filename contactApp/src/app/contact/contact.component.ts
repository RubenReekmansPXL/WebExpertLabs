import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Contact } from '../models/contact.models';
import {ContactService} from '../services/contact.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent{
  constructor(private service: ContactService) { }
  @Input() contact: Contact;
  @Output() Update: EventEmitter<any> = new EventEmitter();

  toggleFavorite(id: string, isFavorite: boolean): void {
    this.service.updateContact(id, {isFavorite}).subscribe(() => this.Update.emit());
  }
}
