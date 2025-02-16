import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { CopyIconComponent } from "../../icons/copy-icon/copy-icon.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-requested-message',
  imports: [CommonModule],
  templateUrl: './requested-message.component.html',
  styleUrl: './requested-message.component.css'
})
export class RequestedMessageComponent {
  @Input() message: string | File = ''; // Accept message as input
  fileUrl: string | null = null; // Store the file URL

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    if (this.isFileMessage()) {
      this.fileUrl = this.getFileUrl(); // Initialize the file URL
      this.cdr.detectChanges(); // Trigger change detection
    }
  }

  messages: string[] = []; // Initialize messages array

  addMessage(message: string) {
    this.messages.push(message);
  }

  isFileMessage(): boolean {
    return this.message instanceof File; // Check if the message is a File object
  }

  getFileUrl(): string {
    return URL.createObjectURL(this.message as File); // Create a URL for the file
  }

  getMessageType(): string {
    if (this.isFileMessage()) {
      return (this.message as File).type; // Access the type property safely
    }
    return ''; // Return an empty string if it's not a file
  }

  getFileName(): string {
    if (this.isFileMessage()) {
      return (this.message as File).name; // Return the file name
    }
    return ''; // Return an empty string if it's not a file
  }
}
