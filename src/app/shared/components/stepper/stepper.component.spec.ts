import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StepperComponent, StepConfig } from './stepper.component';

describe('StepperComponent', () => {
  let component: StepperComponent;
  let fixture: ComponentFixture<StepperComponent>;

  const mockSteps: StepConfig[] = [
    { label: 'Technology', key: 'technology' },
    { label: 'Business', key: 'business' },
    { label: 'Contact', key: 'contact' },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StepperComponent);
    component = fixture.componentInstance;
    component.steps = mockSteps;
    component.currentStep = 1;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render all steps', () => {
    const items = fixture.nativeElement.querySelectorAll('.stepper-item');
    expect(items.length).toBe(3);
  });

  it('should mark first step as completed', () => {
    const items = fixture.nativeElement.querySelectorAll('.stepper-item');
    expect(items[0].classList).toContain('completed');
  });

  it('should mark current step as active', () => {
    const items = fixture.nativeElement.querySelectorAll('.stepper-item');
    expect(items[1].classList).toContain('active');
  });

  it('should mark future step as pending', () => {
    const items = fixture.nativeElement.querySelectorAll('.stepper-item');
    expect(items[2].classList).toContain('pending');
  });

  it('should emit stepChange on click of completed step', () => {
    spyOn(component.stepChange, 'emit');
    component.onStepClick(0);
    expect(component.stepChange.emit).toHaveBeenCalledWith(0);
  });

  it('should not emit stepChange for future step', () => {
    spyOn(component.stepChange, 'emit');
    component.onStepClick(2);
    expect(component.stepChange.emit).not.toHaveBeenCalled();
  });
});
