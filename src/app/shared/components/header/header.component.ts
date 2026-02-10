import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  template: `
    <header class="tsbc-header">
      <div class="header-container">
        <a routerLink="/robotics" class="logo-link" aria-label="Technical Safety BC - Home">
          <img src="/assets/logos/tsbc-logo-rgb.jpg" alt="Technical Safety BC" class="logo" />
        </a>
        <nav class="nav-links" aria-label="Main navigation">
          <a routerLink="/robotics" class="nav-link">Technologies</a>
          <a routerLink="/robotics/renewal" class="nav-link">Renewal</a>
          <a routerLink="/robotics/apply" class="nav-link nav-link--apply">Apply</a>
          <a href="#" class="nav-link login-btn">Login</a>
        </nav>
        <button
          class="mobile-menu-btn"
          (click)="toggleMenu()"
          [attr.aria-expanded]="menuOpen"
          aria-label="Toggle navigation menu"
        >
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>
      </div>
      @if (menuOpen) {
        <nav class="mobile-nav" aria-label="Mobile navigation">
          <a routerLink="/robotics" class="mobile-nav-link" (click)="toggleMenu()">Technologies</a>
          <a routerLink="/robotics/renewal" class="mobile-nav-link" (click)="toggleMenu()">Renewal</a>
          <a routerLink="/robotics/apply" class="mobile-nav-link" (click)="toggleMenu()">Apply</a>
          <a href="#" class="mobile-nav-link" (click)="toggleMenu()">Login</a>
        </nav>
      }
    </header>
  `,
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  menuOpen = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
}
