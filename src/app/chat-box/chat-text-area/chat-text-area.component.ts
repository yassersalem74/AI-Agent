import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UploadIconComponent } from "../../icons/upload-icon/upload-icon.component";

@Component({
  standalone: true,
  selector: 'app-chat-text-area',
  imports: [FormsModule, UploadIconComponent],
  templateUrl: './chat-text-area.component.html',
  styleUrl: './chat-text-area.component.css'
})
export class ChatTextAreaComponent {
  message: string = '';
  @Output() messageSent = new EventEmitter<string | File>();

  sendMessage() {
    if (this.message.trim()) {
      this.messageSent.emit(this.message);
      this.message = ''; // Clear the input after sending
    }
  }

  handleFileUpload(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];

      // Validate file type
      const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'image/jpeg',
        'image/png',
        'image/gif'
      ];

      if (allowedTypes.includes(file.type)) {
        this.messageSent.emit(file); // Emit the selected file
      } else {
        alert('Invalid file type. Please upload only PDF, Word, or image files.');
      }
    }
  }
}
