import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppService } from '../../services/app.service';
import { Member, Mail, Args } from '../../services/app.class';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contacts: Member[];
  assistants: Member[];
  loading1: boolean;
  loading2: boolean;

  sendingMsg = false;

  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
    this.getIcecContacts();
    this.getIcecAssistance();
  }

  onFormSubmit(form: NgForm): void {

    if (form.invalid)
      return;

    this.sendingMsg = true;

    this.appService
      .sendMessage(this.formatMessage(form.value))
      .subscribe(
      (x) => {
        form.resetForm();
        this.sendingMsg = false;
      },
      (err) => {
        this.sendingMsg = false;
      }
      );
  }

  private formatMessage(value: any): Mail {

    let mail = new Mail();

    mail.name = value['name'];
    mail.from = value['email'];
    mail.subject = value['subject'];
    mail.message = value['message'];
    return mail;
  }

  getIcecContacts(): void {
    this.loading1 = true;
    let input: Args = { type: 'CU', year: null };
    this.appService.getMembers(input).subscribe(
      (x) => { this.contacts = x.memberList; this.loading1 = false; },
      (err) => { this.loading1 = false; });
  }

  getIcecAssistance(): void {
    this.loading2 = true;
    let input: Args = { type: 'NA', year: null };
    this.appService.getMembers(input).subscribe(
      (x) => { this.assistants = x.memberList; this.loading2 = false; },
      (err) => { this.loading2 = false; });
  }
}
