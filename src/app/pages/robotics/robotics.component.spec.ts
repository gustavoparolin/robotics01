import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { RoboticsComponent } from './robotics.component';

describe('RoboticsComponent', () => {
  let component: RoboticsComponent;
  let fixture: ComponentFixture<RoboticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoboticsComponent, RouterModule.forRoot([])],
    }).compileComponents();

    fixture = TestBed.createComponent(RoboticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render hero with Robotics title', () => {
    const hero = fixture.nativeElement.querySelector('app-hero');
    expect(hero).toBeTruthy();
  });

  it('should render header and footer', () => {
    expect(fixture.nativeElement.querySelector('app-header')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('app-footer')).toBeTruthy();
  });

  it('should render Advancing Robotics Safety section', () => {
    const intro = fixture.nativeElement.querySelector('.intro-section h2');
    expect(intro.textContent).toContain('Advancing Robotics Safety');
  });

  it('should render 9 interest cards', () => {
    const cards = fixture.nativeElement.querySelectorAll('.interest-section app-card');
    expect(cards.length).toBe(9);
  });

  it('should render regulations list', () => {
    const items = fixture.nativeElement.querySelectorAll('.regulation-links li');
    expect(items.length).toBe(5);
  });

  it('should render online services section', () => {
    const services = fixture.nativeElement.querySelector('.services-section');
    expect(services).toBeTruthy();
  });

  it('should render related information section', () => {
    const related = fixture.nativeElement.querySelector('.related-section');
    expect(related).toBeTruthy();
  });
});
