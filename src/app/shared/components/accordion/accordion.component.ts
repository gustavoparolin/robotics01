import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  standalone: true,
  template: `
    <div class="tsbc-accordion">
      <button
        class="accordion-header"
        (click)="toggle()"
        [attr.aria-expanded]="isOpen"
        [attr.aria-controls]="'accordion-' + panelId"
      >
        <h3 class="accordion-title">{{ title }}</h3>
        <span class="accordion-icon" [class.open]="isOpen" aria-hidden="true">&#9660;</span>
      </button>
      @if (isOpen) {
        <div
          class="accordion-panel"
          [id]="'accordion-' + panelId"
          role="region"
        >
          <div class="accordion-content">
            <ng-content />
          </div>
        </div>
      }
    </div>
  `,
  styleUrl: './accordion.component.scss',
})
export class AccordionComponent {
  @Input() title = '';
  @Input() panelId = '';
  isOpen = false;

  toggle(): void {
    this.isOpen = !this.isOpen;
  }
}
