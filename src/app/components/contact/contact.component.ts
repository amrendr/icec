import { Component, OnInit, AfterViewChecked, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppService } from '../../services/app.service';
import { Member, Mail, Args } from '../../services/app.class';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, AfterViewChecked {

  contacts: Member[];
  assistants: Member[];
  loading1: boolean;
  loading2: boolean;

  sendingMsg = false;
  msgForm: NgForm;
  @ViewChild('f') currentForm: NgForm;

  emailValidationFailed = false;

  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
    this.getIcecContacts();
    this.getIcecAssistance();
  }

  ngAfterViewChecked() {
    this.formChanged();
  }

  formChanged() {
    if (this.currentForm === this.msgForm) { return; }
    this.msgForm = this.currentForm;
    if (this.msgForm) {
      this.msgForm.valueChanges
        .subscribe(data => this.onValueChanged(data));
    }
  }

  validateEmail(email: string): boolean {
    if (email === '') {
      return true;
    }
    const re = new RegExp(`^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|
    (".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))`);
    return re.test(email);
  }

  onValueChanged(data?: any) {
    if (!this.msgForm) { return; }
    const control = this.msgForm.form.get('email');
    if (control && control.dirty) {
      this.emailValidationFailed = !this.validateEmail(control.value);
    }
  }

  onFormSubmit(form: NgForm): void {

    if (form.invalid) {
      return;
    }

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

    const mail = new Mail();

    mail.name = value['name'];
    mail.from = value['email'];
    mail.subject = value['subject'];
    mail.message = value['message'];
    return mail;
  }

  getIcecContacts(): void {
    this.loading1 = true;
    const input: Args = { type: 'CU', year: null };
    this.appService.getMembers(input).subscribe(
      (x) => { this.contacts = x.memberList; this.loading1 = false; },
      (err) => { this.loading1 = false; });
  }

  getIcecAssistance(): void {
    this.loading2 = true;
    const input: Args = { type: 'NA', year: null };
    this.appService.getMembers(input).subscribe(
      (x) => { this.assistants = x.memberList; this.loading2 = false; },
      (err) => { this.loading2 = false; });
  }
}
