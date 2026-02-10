import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async () => {
    localStorage.clear();
    await TestBed.configureTestingModule({
      imports: [
        FormComponent,
        RouterModule.forRoot([]),
        ReactiveFormsModule,
        FormlyModule.forRoot(),
        FormlyBootstrapModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 6 steps', () => {
    expect(component.steps.length).toBe(6);
  });

  it('should start at step 0', () => {
    expect(component.currentStep).toBe(0);
  });

  it('should render stepper component', () => {
    const stepper = fixture.nativeElement.querySelector('app-stepper');
    expect(stepper).toBeTruthy();
  });

  it('should navigate to next step', () => {
    component.nextStep();
    expect(component.currentStep).toBe(1);
  });

  it('should not go below step 0', () => {
    component.previousStep();
    expect(component.currentStep).toBe(0);
  });

  it('should render breadcrumb', () => {
    const breadcrumb = fixture.nativeElement.querySelector('.breadcrumb');
    expect(breadcrumb).toBeTruthy();
  });

  it('should show confirmation after submit', () => {
    component.submitApplication();
    fixture.detectChanges();
    const confirmation = fixture.nativeElement.querySelector('.confirmation');
    expect(confirmation).toBeTruthy();
  });
});
