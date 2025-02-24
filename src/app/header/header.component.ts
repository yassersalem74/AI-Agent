import { Component } from '@angular/core';
import { AddIconComponent } from "../icons/add-icon/add-icon.component";

@Component({
  selector: 'app-chat-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [AddIconComponent]
})
export class ChatHeaderComponent {
  isActionMenuOpen = false;

  toggleActionMenu() {
    this.isActionMenuOpen = !this.isActionMenuOpen;
  }

  refreshPage(): void {
    window.location.reload();
  }
}
