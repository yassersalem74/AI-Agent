import { Component } from '@angular/core';
import { RequestedMessageComponent } from "./requested-message/requested-message.component";
import { TextMessageComponent } from "./respond-message/text-message/text-message.component";
import { ChatTextAreaComponent } from "./chat-text-area/chat-text-area.component";
import { ChatHeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-chat-box',
  imports: [RequestedMessageComponent, TextMessageComponent, ChatTextAreaComponent, ChatHeaderComponent],
  templateUrl: './chat-box.component.html',
  styleUrl: './chat-box.component.css'
})
export class ChatBoxComponent {

}
