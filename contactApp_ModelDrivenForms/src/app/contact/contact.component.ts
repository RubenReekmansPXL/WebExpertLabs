import { Component, OnInit, Input, Output} from '@angular/core';
import { Contact } from '../models/contact.models';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent {
  @Input() contact: Contact;

}
