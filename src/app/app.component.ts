import { Component } from '@angular/core';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ChatHeaderComponent } from './header/header.component';
import { TextMessageComponent } from './chat-box/respond-message/text-message/text-message.component';
import { RequestedMessageComponent } from './chat-box/requested-message/requested-message.component';
import { ChatTextAreaComponent } from './chat-box/chat-text-area/chat-text-area.component';
import { CommonModule } from '@angular/common';
import { MenuIconComponent } from "./icons/menu-icon/menu-icon.component";
// import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    SidebarComponent,
    ChatHeaderComponent,
    TextMessageComponent,
    RequestedMessageComponent,
    ChatTextAreaComponent,
    CommonModule,
    ChatHeaderComponent,
    MenuIconComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'AI-agent';

  isSidebarOpen = false;
  messages: string[] = []; // Array to hold messages

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  closeSidebar() {
    this.isSidebarOpen = false;
  }

  addMessage(message: string) {
    this.messages.push(message); // Add new message to the array
  }
}
