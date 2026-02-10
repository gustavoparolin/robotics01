import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { RenewalComponent } from './renewal.component';

describe('RenewalComponent', () => {
  let component: RenewalComponent;
  let fixture: ComponentFixture<RenewalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RenewalComponent, RouterModule.forRoot([])],
    }).compileComponents();

    fixture = TestBed.createComponent(RenewalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render header and footer', () => {
    expect(fixture.nativeElement.querySelector('app-header')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('app-footer')).toBeTruthy();
  });

  it('should render hero with Certification Renewal title', () => {
    const hero = fixture.nativeElement.querySelector('app-hero');
    expect(hero).toBeTruthy();
  });

  it('should render 2 quick action cards', () => {
    const cards = fixture.nativeElement.querySelectorAll('.quick-actions app-card');
    expect(cards.length).toBe(2);
  });

  it('should render 4 accordion sections', () => {
    const accordions = fixture.nativeElement.querySelectorAll('app-accordion');
    expect(accordions.length).toBe(4);
  });

  it('should render 3 related information cards', () => {
    const cards = fixture.nativeElement.querySelectorAll('.related-section app-card');
    expect(cards.length).toBe(3);
  });
});
