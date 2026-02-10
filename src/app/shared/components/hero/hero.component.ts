import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="tsbc-hero" [style.background-color]="backgroundColor">
      <div class="hero-container">
        <div class="hero-content">
          <h1 class="hero-title">{{ title }}</h1>
          @if (subtitle) {
            <p class="hero-subtitle">{{ subtitle }}</p>
          }
        </div>
        @if (imageUrl) {
          <div class="hero-image">
            <img [src]="imageUrl" [alt]="imageAlt" />
          </div>
        }
      </div>
    </section>
  `,
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() backgroundColor = '#B5CEDF';
  @Input() imageUrl = '';
  @Input() imageAlt = '';
}
