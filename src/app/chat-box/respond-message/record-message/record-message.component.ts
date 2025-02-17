import { Component } from '@angular/core';
import { PreviousIconComponent } from "../../../icons/previous-icon/previous-icon.component";
import { PauseIconComponent } from "../../../icons/pause-icon/pause-icon.component";
import { NextIconComponent } from "../../../icons/next-icon/next-icon.component";
import { PlayIconComponent } from "../../../icons/play-icon/play-icon.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-record-message',
  imports: [PreviousIconComponent, PauseIconComponent, NextIconComponent, PlayIconComponent , CommonModule],
  templateUrl: './record-message.component.html',
  styleUrl: './record-message.component.css'
})
export class RecordMessageComponent {
  audio = new Audio('/translate_tts.mp3'); // Audio file to play
  isPlaying = false; // Track playback state, initialized to false

  constructor() {
    // Ensure audio is paused when the component initializes
    this.audio.pause();
  }

  // Toggle play/pause
  togglePlay() {
    if (this.isPlaying) {
      this.audio.pause(); // Pause the audio
    } else {
      this.audio.play(); // Play the audio
    }
    this.isPlaying = !this.isPlaying; // Toggle the state
  }
}
