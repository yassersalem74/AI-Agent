import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CloseIconComponent } from "../icons/close-icon/close-icon.component";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  imports: [CloseIconComponent]
})
export class SidebarComponent {
  @Input() isOpen: boolean = false;
  @Output() close = new EventEmitter<void>();

  get sidebarClass(): string {
    return this.isOpen
      ? 'bg-gray-700 text-white w-64 h-screen p-4 fixed top-0 left-0 transition-transform'
      : 'bg-gray-700 text-white w-64 h-screen p-4 fixed top-0 left-0 -translate-x-full transition-transform';
  }

  closeSidebar() {
    this.close.emit();
  }
}
