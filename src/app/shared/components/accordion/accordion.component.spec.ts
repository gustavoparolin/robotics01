import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccordionComponent } from './accordion.component';

describe('AccordionComponent', () => {
  let component: AccordionComponent;
  let fixture: ComponentFixture<AccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccordionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AccordionComponent);
    component = fixture.componentInstance;
    component.title = 'When Do I Need to Renew?';
    component.panelId = 'renew';
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should start closed', () => {
    expect(component.isOpen).toBeFalse();
  });

  it('should toggle open and closed', () => {
    component.toggle();
    expect(component.isOpen).toBeTrue();
    component.toggle();
    expect(component.isOpen).toBeFalse();
  });

  it('should render title', () => {
    fixture.detectChanges();
    const title = fixture.nativeElement.querySelector('.accordion-title');
    expect(title.textContent).toContain('When Do I Need to Renew?');
  });

  it('should have aria-expanded attribute', () => {
    fixture.detectChanges();
    const header = fixture.nativeElement.querySelector('.accordion-header');
    expect(header.getAttribute('aria-expanded')).toBe('false');
    component.toggle();
    fixture.detectChanges();
    expect(header.getAttribute('aria-expanded')).toBe('true');
  });

  it('should show panel content when open', () => {
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.accordion-panel')).toBeNull();
    component.toggle();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.accordion-panel')).toBeTruthy();
  });
});
