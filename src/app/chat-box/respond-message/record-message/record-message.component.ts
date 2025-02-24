import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingMessageComponent } from "../../loading-message/loading-message.component";
import { environment } from './../../../../environments/environment';

@Component({
  standalone: true,
  selector: 'app-record-message',
  imports: [CommonModule, LoadingMessageComponent],
templateUrl: './record-message.component.html',
  styleUrls: ['./record-message.component.css']
})
export class RecordMessageComponent implements OnInit {
  @Input() text: string = '';
  @Input() audioUrl: string = '';
  audioItems: any[] = [];
  currentAudio: HTMLAudioElement | null = null;
  currentPlayingIndex: number | null = null;
  isLoading = true; // Track loading state

  ngOnInit() {
    // Simulate loading for 3 seconds
    setTimeout(() => {
      this.isLoading = false;
      if (this.text && this.audioUrl) {
        const fullAudioUrl = `${environment.audioBaseUrl}${this.audioUrl}`;
        this.audioItems = [{
          shortText: this.text,
          url: fullAudioUrl,
          isPlaying: false
        }];
      }
    });
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
