import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="tsbc-footer">
      <div class="back-to-top">
        <div class="back-to-top-container">
          <button class="back-to-top-btn" (click)="scrollToTop()" aria-label="Back to top">
            <span class="arrow-icon">&#8593;</span>
            <span>Back To Top</span>
          </button>
          <div class="footer-actions">
            <a href="#" class="footer-btn primary">Report An Incident</a>
            <a href="#" class="footer-btn secondary">Contact Us</a>
          </div>
        </div>
      </div>
      <div class="footer-content">
        <div class="footer-container">
          <p class="acknowledgment">
            Technical Safety BC acknowledges our work takes place on the traditional territories
            of Indigenous Peoples across British Columbia.
          </p>
          <p class="privacy">
            The personal information on this form is collected under the authority of the
            Safety Standards Act. If you have questions about the collection of your personal
            information, please contact the Manager, Legislative Services.
          </p>
          <div class="footer-bottom">
            <p class="copyright">&copy; {{ currentYear }} Technical Safety BC</p>
            <div class="footer-links">
              <a href="#">Cookie Policy</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Use</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
