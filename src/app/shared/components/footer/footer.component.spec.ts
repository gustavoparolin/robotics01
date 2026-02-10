import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display current year', () => {
    expect(component.currentYear).toBe(new Date().getFullYear());
  });

  it('should render copyright text', () => {
    const copyright = fixture.nativeElement.querySelector('.copyright');
    expect(copyright.textContent).toContain('Technical Safety BC');
  });

  it('should have back to top button', () => {
    const btn = fixture.nativeElement.querySelector('.back-to-top-btn');
    expect(btn).toBeTruthy();
    expect(btn.getAttribute('aria-label')).toBe('Back to top');
  });

  it('should call scrollToTop on button click', () => {
    spyOn(window, 'scrollTo');
    component.scrollToTop();
    expect(window.scrollTo).toHaveBeenCalled();
  });
});
