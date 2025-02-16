import { Component } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import { RecordIconComponent } from "../../icons/record-icon/record-icon.component";
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-chat-text-area',
  imports: [RecordIconComponent, FormsModule],
  templateUrl: './chat-text-area.component.html',
  styleUrl: './chat-text-area.component.css'
})
export class ChatTextAreaComponent {
  message: string = '';
  @Output() messageSent = new EventEmitter<string>();

  sendMessage() {
    if (this.message.trim()) {
      this.messageSent.emit(this.message);
      this.message = ''; // Clear the input after sending
    }
  }

  recordMessage() {
    // Simulate recording a message
    const recordedMessage = "Recorded message"; // Replace with actual recording logic
    this.messageSent.emit(recordedMessage);
  }
}
