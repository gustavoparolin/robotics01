import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  template: `
    <a [href]="link" class="tsbc-card" [class.dark]="dark" role="article">
      @if (tag) {
        <span class="card-tag">{{ tag }}</span>
      }
      <h3 class="card-title">{{ title }}</h3>
      @if (description) {
        <p class="card-description">{{ description }}</p>
      }
      @if (ctaText) {
        <span class="card-cta">
          {{ ctaText }}
          <span class="cta-arrow" aria-hidden="true">&rarr;</span>
        </span>
      }
    </a>
  `,
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() tag = '';
  @Input() title = '';
  @Input() description = '';
  @Input() link = '#';
  @Input() ctaText = '';
  @Input() dark = false;
}
