import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    component.title = 'Robotics Certification';
    fixture.detectChanges();
    const title = fixture.nativeElement.querySelector('.card-title');
    expect(title.textContent).toContain('Robotics Certification');
  });

  it('should render tag when provided', () => {
    component.tag = 'New';
    component.title = 'Test';
    fixture.detectChanges();
    const tag = fixture.nativeElement.querySelector('.card-tag');
    expect(tag).toBeTruthy();
    expect(tag.textContent).toContain('New');
  });

  it('should not render tag when empty', () => {
    component.title = 'Test';
    fixture.detectChanges();
    const tag = fixture.nativeElement.querySelector('.card-tag');
    expect(tag).toBeNull();
  });

  it('should apply dark class when dark is true', () => {
    component.title = 'Test';
    component.dark = true;
    fixture.detectChanges();
    const card = fixture.nativeElement.querySelector('.tsbc-card');
    expect(card.classList).toContain('dark');
  });

  it('should render CTA text when provided', () => {
    component.title = 'Test';
    component.ctaText = 'Learn More';
    fixture.detectChanges();
    const cta = fixture.nativeElement.querySelector('.card-cta');
    expect(cta.textContent).toContain('Learn More');
  });
});
