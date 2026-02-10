import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-panel',
  standalone: true,
  template: `
    @if (isOpen) {
      <div
        class="panel-overlay"
        role="button"
        tabindex="0"
        aria-label="Close panel overlay"
        (click)="panelClose.emit()"
        (keydown.enter)="panelClose.emit()"
        (keydown.escape)="panelClose.emit()"
      ></div>
      <aside class="side-panel" role="dialog" [attr.aria-label]="title">
        <div class="panel-header">
          <h2 class="panel-title">{{ title }}</h2>
          <button class="panel-close" (click)="panelClose.emit()" aria-label="Close panel">
            &#10005;
          </button>
        </div>
        <div class="panel-body">
          <ng-content />
        </div>
      </aside>
    }
  `,
  styleUrl: './side-panel.component.scss',
})
export class SidePanelComponent {
  @Input() title = '';
  @Input() isOpen = false;
  @Output() panelClose = new EventEmitter<void>();
}
