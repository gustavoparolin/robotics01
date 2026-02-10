import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface StepConfig {
  label: string;
  key: string;
}

@Component({
  selector: 'app-stepper',
  standalone: true,
  template: `
    <nav class="tsbc-stepper" aria-label="Application progress">
      <ol class="stepper-list">
        @for (step of steps; track step.key; let i = $index) {
          <li
            class="stepper-item"
            [class.completed]="i < currentStep"
            [class.active]="i === currentStep"
            [class.pending]="i > currentStep"
          >
            <button
              class="stepper-btn"
              [disabled]="i > currentStep"
              (click)="onStepClick(i)"
              [attr.aria-current]="i === currentStep ? 'step' : null"
            >
              <span class="stepper-indicator">
                @if (i < currentStep) {
                  <span class="check-icon" aria-hidden="true">&#10003;</span>
                } @else {
                  <span class="step-dot" aria-hidden="true"></span>
                }
              </span>
              <span class="stepper-label">{{ step.label }}</span>
            </button>
            @if (i < steps.length - 1) {
              <span class="stepper-connector" aria-hidden="true"></span>
            }
          </li>
        }
      </ol>
    </nav>
  `,
  styleUrl: './stepper.component.scss',
})
export class StepperComponent {
  @Input() steps: StepConfig[] = [];
  @Input() currentStep = 0;
  @Output() stepChange = new EventEmitter<number>();

  onStepClick(index: number): void {
    if (index <= this.currentStep) {
      this.stepChange.emit(index);
    }
  }
}
