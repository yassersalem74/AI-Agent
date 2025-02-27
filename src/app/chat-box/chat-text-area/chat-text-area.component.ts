import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UploadIconComponent } from "../../icons/upload-icon/upload-icon.component";
import { SendIconComponent } from "../../icons/send-icon/send-icon.component";
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-chat-text-area',
  imports: [FormsModule, UploadIconComponent, SendIconComponent, CommonModule],
  templateUrl: './chat-text-area.component.html',
  styleUrl: './chat-text-area.component.css'
})
export class ChatTextAreaComponent {
  message: string = '';
  @Output() messageSent = new EventEmitter<{ message: string | File, voice: string }>();
  @Input() isLoading: boolean = false;

  voices: string[] = ['alloy', 'ash', 'coral', 'echo', 'fable', 'nova', 'onyx', 'sage', 'shimmer'];
  selectedVoice: string = 'alloy'; // Default voice

  sendMessage() {
    if (this.message.trim()) {
      this.messageSent.emit({ message: this.message, voice: this.selectedVoice });
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
        'image/jpeg',
        'image/png',
      ];

      if (allowedTypes.includes(file.type)) {
        this.messageSent.emit({ message: file, voice: this.selectedVoice }); // Emit the selected file with voice
      } else {
        alert('Invalid file type. Please upload only PDF, Word, or image files.');
      }
    }
  }
}
