import { Component, OnInit } from '@angular/core';
import { PreviousIconComponent } from "../../../icons/previous-icon/previous-icon.component";
import { PauseIconComponent } from "../../../icons/pause-icon/pause-icon.component";
import { NextIconComponent } from "../../../icons/next-icon/next-icon.component";
import { PlayIconComponent } from "../../../icons/play-icon/play-icon.component";
import { CommonModule } from '@angular/common';
import { MessageService } from '../../../services/message/message.service';
import { LoadingMessageComponent } from "../../loading-message/loading-message.component";

@Component({
  selector: 'app-record-message',
  imports: [PauseIconComponent, PlayIconComponent, CommonModule, LoadingMessageComponent],
  templateUrl: './record-message.component.html',
  styleUrl: './record-message.component.css'
})
export class RecordMessageComponent implements OnInit {
  audioItems: any[] = [];
  currentAudio: HTMLAudioElement | null = null;
  currentPlayingIndex: number | null = null;
  isLoading = true; // Track loading state

  constructor(private messageService: MessageService) { }
  audio = new Audio('/translate_tts.mp3'); // Audio file to play
  isPlaying = true; // Track playback state, initialized to false

  ngOnInit() {
    // Simulate loading for 3 seconds
    setTimeout(() => {
      this.isLoading = false;
      this.messageService.getAudioMessages().subscribe(data => {
        this.audioItems = data.audioUrl.map((item: any) => ({
          ...item,
          isPlaying: false
        }));
      });
    }, 3000);
  }

  togglePlay(index: number) {
    const item = this.audioItems[index];

    if (this.currentPlayingIndex !== null && this.currentPlayingIndex !== index) {
      this.stopPreviousAudio();
    }

    if (item.isPlaying) {
      this.pauseAudio(index);
    } else {
      this.playAudio(index);
    }
  }

  private playAudio(index: number) {
    const item = this.audioItems[index];
    this.currentAudio = new Audio(item.url);

    this.currentAudio.play().catch((error) => {
      console.error('Error playing audio:', error);
      alert('Failed to play audio. Please check the file format or source.');
    });

    this.currentPlayingIndex = index;
    item.isPlaying = true;

    this.currentAudio.onended = () => {
      this.pauseAudio(index);
    };
  }

  private pauseAudio(index: number) {
    const item = this.audioItems[index];
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio = null;
    }
    item.isPlaying = false;
    this.currentPlayingIndex = null;
  }

  private stopPreviousAudio() {
    if (this.currentPlayingIndex !== null) {
      this.pauseAudio(this.currentPlayingIndex);
    }
  }

  ngOnDestroy() {
    this.stopPreviousAudio();
  }
}
