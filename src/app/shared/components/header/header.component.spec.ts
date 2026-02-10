import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent, RouterModule.forRoot([])],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start with menu closed', () => {
    expect(component.menuOpen).toBeFalse();
  });

  it('should toggle menu on toggleMenu()', () => {
    component.toggleMenu();
    expect(component.menuOpen).toBeTrue();
    component.toggleMenu();
    expect(component.menuOpen).toBeFalse();
  });

  it('should render TSBC logo', () => {
    const logo = fixture.nativeElement.querySelector('.logo');
    expect(logo).toBeTruthy();
    expect(logo.alt).toContain('Technical Safety BC');
  });

  it('should have accessible mobile menu button', () => {
    const btn = fixture.nativeElement.querySelector('.mobile-menu-btn');
    expect(btn.getAttribute('aria-label')).toBe('Toggle navigation menu');
  });
});
