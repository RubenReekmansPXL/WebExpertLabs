import { Component, OnInit } from '@angular/core';
import {Contact} from './models/contact.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent{
  contactList: Contact[] = [
    new Contact('jane doe', 'jane.doe@mail.com', '0113448239', true, 'assets/avatar.png'),
    new Contact('john doe', 'john.doe@mail.com', '011424839', false, 'assets/avatar.png'),
    new Contact('Dries Swinnen', 'dries.swinnen@pxl.be', '011664839', true, 'assets/avatar.png')
  ];

  handleData(event: Contact): void{
    console.log('Recieved data!', event);
  }
  createContact(event: Contact): void {
    this.contactList.push(event);
  }


}
