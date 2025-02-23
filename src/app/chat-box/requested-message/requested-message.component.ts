import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-requested-message',
  imports: [CommonModule],
  templateUrl: './requested-message.component.html',
  styleUrl: './requested-message.component.css'
})
export class RequestedMessageComponent implements OnInit {
  @Input() message: string | File = '';
  fileUrl: string | null = null;

  ngOnInit() {
    if (this.isFileMessage()) {
      this.fileUrl = this.getFileUrl();
      console.log('Generated file URL:', this.fileUrl);
    }
  }

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
