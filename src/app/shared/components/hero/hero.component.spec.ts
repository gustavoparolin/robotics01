import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroComponent } from './hero.component';

describe('HeroComponent', () => {
  let component: HeroComponent;
  let fixture: ComponentFixture<HeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    component.title = 'Robotics';
    fixture.detectChanges();
    const title = fixture.nativeElement.querySelector('.hero-title');
    expect(title.textContent).toContain('Robotics');
  });

  it('should render subtitle when provided', () => {
    component.title = 'Robotics';
    component.subtitle = 'Safety for all';
    fixture.detectChanges();
    const subtitle = fixture.nativeElement.querySelector('.hero-subtitle');
    expect(subtitle).toBeTruthy();
    expect(subtitle.textContent).toContain('Safety for all');
  });

  it('should not render subtitle when empty', () => {
    component.title = 'Robotics';
    component.subtitle = '';
    fixture.detectChanges();
    const subtitle = fixture.nativeElement.querySelector('.hero-subtitle');
    expect(subtitle).toBeNull();
  });

  it('should apply default background color', () => {
    expect(component.backgroundColor).toBe('#B5CEDF');
  });

  it('should render image when imageUrl provided', () => {
    component.title = 'Test';
    component.imageUrl = '/assets/test.png';
    component.imageAlt = 'Test image';
    fixture.detectChanges();
    const img = fixture.nativeElement.querySelector('.hero-image img');
    expect(img).toBeTruthy();
    expect(img.alt).toBe('Test image');
  });
});
