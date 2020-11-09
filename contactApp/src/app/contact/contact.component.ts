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
  @Input() index: number;
  @Output() Update: EventEmitter<any> = new EventEmitter();

  toggleFavorite(index: number): void {
    this.service.toggleFavorite(index);
    this.Update.emit();
  }
}
