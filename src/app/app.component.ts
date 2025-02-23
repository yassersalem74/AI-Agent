import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from './services/message/message.service';
import { ChatHeaderComponent } from "./header/header.component";
import { RequestedMessageComponent } from "./chat-box/requested-message/requested-message.component";
import { RecordMessageComponent } from "./chat-box/respond-message/record-message/record-message.component";
import { ChatTextAreaComponent } from "./chat-box/chat-text-area/chat-text-area.component";
import { CommonModule } from '@angular/common';

interface Message {
  type: 'user' | 'ai';
  content?: string | File;
  text?: string;
  audioUrl?: string;
}

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    ChatHeaderComponent,
    RequestedMessageComponent,
    RecordMessageComponent,
    ChatTextAreaComponent,
    CommonModule,
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService]
})
export class AppComponent {
  messages: Message[] = [];

  constructor(private messageService: MessageService) {}

  addMessage(message: string | File) {
    // Add user message
    this.messages.push({ type: 'user', content: message });

    // Send to appropriate endpoint
    if (typeof message === 'string') {
      this.messageService.sendText(message).subscribe({
        next: (response) => {
          this.messages.push({
            type: 'ai',
            text: response.data.text,
            audioUrl: response.data.audioUrl
          });
        },
        error: (error) => console.error(error)
      });
    } else {
      const handler = message.type.startsWith('image/')
        ? this.messageService.sendImage.bind(this.messageService)
        : this.messageService.sendPdf.bind(this.messageService);

      handler(message).subscribe({
        next: (response) => {
          this.messages.push({
            type: 'ai',
            text: response.data.text,
            audioUrl: response.data.audioUrl
          });
        },
        error: (error) => console.error(error)
      });
    }
  }
}
