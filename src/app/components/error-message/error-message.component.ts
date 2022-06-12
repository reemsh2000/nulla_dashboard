import { Component, Input } from '@angular/core';
import {Message,MessageService} from 'primeng/api';


@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css'],
})
export class ErrorMessageComponent  {
  msgs1: Message[];
  msg= {severity:'error', summary:'Error', detail:'You should enter a valid type form'};
 @Input() showErrorMessage: boolean;

  
  constructor(private messageService: MessageService) {}
  ngOnInit() {
      this.msgs1 = [
        this.msg 
      ];
  }
  
}
