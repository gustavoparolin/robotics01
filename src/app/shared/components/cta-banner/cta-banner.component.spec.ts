import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { CtaBannerComponent } from './cta-banner.component';

describe('CtaBannerComponent', () => {
  let component: CtaBannerComponent;
  let fixture: ComponentFixture<CtaBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtaBannerComponent, RouterModule.forRoot([])],
    }).compileComponents();

    fixture = TestBed.createComponent(CtaBannerComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should render heading', () => {
    component.heading = 'Renew Your Certificate';
    fixture.detectChanges();
    const heading = fixture.nativeElement.querySelector('.cta-heading');
    expect(heading.textContent).toContain('Renew Your Certificate');
  });

  it('should render body when provided', () => {
    component.heading = 'Test';
    component.body = 'Renew before deadline';
    fixture.detectChanges();
    const body = fixture.nativeElement.querySelector('.cta-body');
    expect(body).toBeTruthy();
    expect(body.textContent).toContain('Renew before deadline');
  });

  it('should render button when buttonText provided', () => {
    component.heading = 'Test';
    component.buttonText = 'Renew Now';
    fixture.detectChanges();
    const btn = fixture.nativeElement.querySelector('.cta-button');
    expect(btn).toBeTruthy();
    expect(btn.textContent).toContain('Renew Now');
  });

  it('should apply default background color', () => {
    expect(component.backgroundColor).toBe('#00497B');
  });
});
