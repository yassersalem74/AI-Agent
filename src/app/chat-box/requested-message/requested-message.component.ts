import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-requested-message',
  imports: [CommonModule],
  templateUrl: './requested-message.component.html',
  styleUrl: './requested-message.component.css'
})
export class RequestedMessageComponent {
  @Input() message: string | File = '';
  fileUrl: string | null = null;

  isFileMessage(): boolean {
    return this.message instanceof File;
  }

  getFileUrl(): string {
    return URL.createObjectURL(this.message as File);
  }

  getMessageType(): string {
    return this.isFileMessage() ? (this.message as File).type : '';
  }

  getFileName(): string {
    return this.isFileMessage() ? (this.message as File).name : '';
  }
}
