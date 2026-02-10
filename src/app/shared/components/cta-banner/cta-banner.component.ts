import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cta-banner',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="tsbc-cta-banner" [style.background-color]="backgroundColor">
      <div class="cta-container">
        <div class="cta-content">
          <h2 class="cta-heading">{{ heading }}</h2>
          @if (body) {
            <p class="cta-body">{{ body }}</p>
          }
        </div>
        @if (buttonText) {
          <a [routerLink]="buttonLink" class="cta-button">{{ buttonText }}</a>
        }
      </div>
    </section>
  `,
  styleUrl: './cta-banner.component.scss',
})
export class CtaBannerComponent {
  @Input() heading = '';
  @Input() body = '';
  @Input() buttonText = '';
  @Input() buttonLink = '#';
  @Input() backgroundColor = '#00497B';
}
