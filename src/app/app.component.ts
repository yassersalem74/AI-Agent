import { Component } from '@angular/core';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ChatHeaderComponent } from './header/header.component';
import { TextMessageComponent } from './chat-box/respond-message/text-message/text-message.component';
import { RequestedMessageComponent } from './chat-box/requested-message/requested-message.component';
import { ChatTextAreaComponent } from './chat-box/chat-text-area/chat-text-area.component';
import { CommonModule } from '@angular/common';
import { MenuIconComponent } from "./icons/menu-icon/menu-icon.component";
import { RecordMessageComponent } from "./chat-box/respond-message/record-message/record-message.component";
import { LoadingMessageComponent } from "./chat-box/loading-message/loading-message.component";
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { MessageService } from './services/message/message.service'; // Adjust the path as necessary
// import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    // SidebarComponent,
    ChatHeaderComponent,
    // TextMessageComponent,
    RequestedMessageComponent,
    ChatTextAreaComponent,
    CommonModule,
    ChatHeaderComponent,
    // MenuIconComponent,
    RecordMessageComponent,
    // LoadingMessageComponent,
    HttpClientModule // Add HttpClientModule here
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [MessageService] // Ensure your service is provided
})
export class AppComponent {
  title = 'AI-agent';

  isSidebarOpen = false;
  messages: (string | File)[] = []; // Array to hold messages

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  closeSidebar() {
    this.isSidebarOpen = false;
  }

  addMessage(message: string | File) {
    this.messages.push(message); // Add new message to the array
  }
}
