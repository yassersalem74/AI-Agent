import { Component, Input } from '@angular/core';
import { CopyIconComponent } from "../../icons/copy-icon/copy-icon.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-requested-message',
  imports: [CommonModule],
  templateUrl: './requested-message.component.html',
  styleUrl: './requested-message.component.css'
})
export class RequestedMessageComponent {
  @Input() message: string = ''; // Accept message as input and initialize

  messages: string[] = []; // Initialize messages array

  addMessage(message: string) {
    this.messages.push(message);
  }
}
