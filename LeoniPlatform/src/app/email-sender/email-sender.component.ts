import { MailService } from './../services/Mail.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-sender',
  templateUrl: './email-sender.component.html',
  styleUrls: ['./email-sender.component.sass']
})
export class EmailSenderComponent implements OnInit {

  constructor(private _mailService:MailService) { }

  ngOnInit(): void {
  }
sendMail(email:String){console.log(email);this._mailService.sendEMail(email).subscribe(data=>{console.log("tekhdem")},error=>{console.log(error)});console.log("fin")}
}
