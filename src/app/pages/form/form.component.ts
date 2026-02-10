import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { StepperComponent, StepConfig } from '../../shared/components/stepper/stepper.component';
import { SidePanelComponent } from '../../shared/components/side-panel/side-panel.component';
import {
  FormDataService,
  PersonnelEntry,
  ScopeOfWorkEntry,
} from '../../services/form-data.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormlyModule,
    HeaderComponent,
    FooterComponent,
    StepperComponent,
    SidePanelComponent,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent implements OnInit {
  steps: StepConfig[] = [
    { label: 'Technology', key: 'technology' },
    { label: 'Business', key: 'business' },
    { label: 'Contact', key: 'contact' },
    { label: 'Requirements', key: 'requirements' },
    { label: 'Review', key: 'review' },
    { label: 'Payment', key: 'payment' },
  ];

  currentStep = 0;
  submitted = false;

  form = new FormGroup({});
  model: Record<string, unknown> = {};
  fields: FormlyFieldConfig[] = [];

  // Side panels
  personnelPanelOpen = false;
  scopePanelOpen = false;

  // Personnel form
  personnelForm = new FormGroup({});
  personnelModel: PersonnelEntry = this.emptyPersonnel();
  personnelFields: FormlyFieldConfig[] = this.getPersonnelFields();

  // Scope of Work form
  scopeForm = new FormGroup({});
  scopeModel: Partial<ScopeOfWorkEntry> = { workType: '', deviceTypes: [] };
  scopeFields: FormlyFieldConfig[] = this.getScopeFields();

  formDataService = inject(FormDataService);

  ngOnInit(): void {
    const data = this.formDataService.getData();
    this.currentStep = data.currentStep;
    this.loadStepFields();
    this.loadStepModel();
  }

  onStepChange(step: number): void {
    this.saveCurrentStep();
    this.currentStep = step;
    this.formDataService.setStep(step);
    this.form = new FormGroup({});
    this.loadStepFields();
    this.loadStepModel();
  }

  nextStep(): void {
    if (this.currentStep < this.steps.length - 1) {
      this.saveCurrentStep();
      this.currentStep++;
      this.formDataService.setStep(this.currentStep);
      this.form = new FormGroup({});
      this.loadStepFields();
      this.loadStepModel();
    }
  }

  previousStep(): void {
    if (this.currentStep > 0) {
      this.saveCurrentStep();
      this.currentStep--;
      this.formDataService.setStep(this.currentStep);
      this.form = new FormGroup({});
      this.loadStepFields();
      this.loadStepModel();
    }
  }

  submitApplication(): void {
    this.saveCurrentStep();
    this.submitted = true;
  }

  // Personnel panel
  openPersonnelPanel(): void {
    this.personnelModel = this.emptyPersonnel();
    this.personnelForm = new FormGroup({});
    this.personnelPanelOpen = true;
  }

  addPersonnel(): void {
    this.formDataService.addPersonnel({ ...this.personnelModel });
    this.personnelPanelOpen = false;
  }

  removePersonnel(index: number): void {
    this.formDataService.removePersonnel(index);
  }

  // Scope panel
  openScopePanel(): void {
    this.scopeModel = { workType: '', deviceTypes: [] };
    this.scopeForm = new FormGroup({});
    this.scopePanelOpen = true;
  }

  addScope(): void {
    this.formDataService.addScopeOfWork({
      workType: this.scopeModel.workType || '',
      deviceTypes: this.scopeModel.deviceTypes || [],
    });
    this.scopePanelOpen = false;
  }

  removeScopeOfWork(index: number): void {
    this.formDataService.removeScopeOfWork(index);
  }

  private saveCurrentStep(): void {
    const key = this.steps[this.currentStep].key;
    const data = this.formDataService.getData();

    switch (key) {
      case 'technology':
        this.formDataService.updateData({
          technology: (this.model['technology'] as string) || data.technology,
          licenceClass: (this.model['licenceClass'] as string) || data.licenceClass,
        });
        break;
      case 'business':
        this.formDataService.updateData({
          legalBusinessName: (this.model['legalBusinessName'] as string) || data.legalBusinessName,
          dba: (this.model['dba'] as string) || data.dba,
          businessPhone: (this.model['businessPhone'] as string) || data.businessPhone,
          businessPhoneExt: (this.model['businessPhoneExt'] as string) || data.businessPhoneExt,
          businessEmail: (this.model['businessEmail'] as string) || data.businessEmail,
          purchaseOrder: (this.model['purchaseOrder'] as string) || data.purchaseOrder,
        });
        break;
      case 'contact':
        this.formDataService.updateData({
          firstName: (this.model['firstName'] as string) || data.firstName,
          lastName: (this.model['lastName'] as string) || data.lastName,
          primaryPhone: (this.model['primaryPhone'] as string) || data.primaryPhone,
          mobile: (this.model['mobile'] as string) || data.mobile,
          businessContactPhone: (this.model['businessContactPhone'] as string) || data.businessContactPhone,
          contactExt: (this.model['contactExt'] as string) || data.contactExt,
          homePhone: (this.model['homePhone'] as string) || data.homePhone,
          contactEmail: (this.model['contactEmail'] as string) || data.contactEmail,
        });
        break;
      case 'review':
        this.formDataService.updateData({
          confirmAddresses: (this.model['confirmAddresses'] as boolean) || false,
        });
        break;
    }
  }

  private loadStepModel(): void {
    const data = this.formDataService.getData();
    const key = this.steps[this.currentStep].key;

    switch (key) {
      case 'technology':
        this.model = { technology: data.technology, licenceClass: data.licenceClass };
        break;
      case 'business':
        this.model = {
          legalBusinessName: data.legalBusinessName,
          dba: data.dba,
          businessPhone: data.businessPhone,
          businessPhoneExt: data.businessPhoneExt,
          businessEmail: data.businessEmail,
          purchaseOrder: data.purchaseOrder,
        };
        break;
      case 'contact':
        this.model = {
          firstName: data.firstName,
          lastName: data.lastName,
          primaryPhone: data.primaryPhone,
          mobile: data.mobile,
          businessContactPhone: data.businessContactPhone,
          contactExt: data.contactExt,
          homePhone: data.homePhone,
          contactEmail: data.contactEmail,
        };
        break;
      case 'review':
        this.model = { confirmAddresses: data.confirmAddresses };
        break;
      default:
        this.model = {};
    }
  }

  private loadStepFields(): void {
    const key = this.steps[this.currentStep].key;

    switch (key) {
      case 'technology':
        this.fields = this.getTechnologyFields();
        break;
      case 'business':
        this.fields = this.getBusinessFields();
        break;
      case 'contact':
        this.fields = this.getContactFields();
        break;
      case 'requirements':
        this.fields = [];
        break;
      case 'review':
        this.fields = this.getReviewFields();
        break;
      case 'payment':
        this.fields = [];
        break;
      default:
        this.fields = [];
    }
  }

  // ── FIELD DEFINITIONS ──

  private getTechnologyFields(): FormlyFieldConfig[] {
    return [
      {
        key: 'technology',
        type: 'radio',
        props: {
          label: 'Select technology',
          required: true,
          options: [
            { value: 'robotics', label: 'Robotics' },
            { value: 'amusement', label: 'Amusement Devices' },
            { value: 'boiler', label: 'Boiler, Pressure Vessel, Refrigeration' },
            { value: 'electrical', label: 'Electrical' },
            { value: 'elevating', label: 'Elevating Devices' },
            { value: 'gas', label: 'Gas' },
            { value: 'passenger', label: 'Passenger Ropeways' },
          ],
        },
      },
      {
        key: 'licenceClass',
        type: 'radio',
        props: {
          label: 'Select licence class',
          required: true,
          options: [
            { value: 'classA', label: 'Class A — Industrial Robots' },
            { value: 'classB', label: 'Class B — Service and Autonomous Robots' },
            { value: 'classC', label: 'Class C — Drone Systems' },
          ],
        },
        expressions: {
          hide: '!model.technology',
        },
      },
    ];
  }

  private getBusinessFields(): FormlyFieldConfig[] {
    return [
      {
        key: 'legalBusinessName',
        type: 'input',
        props: {
          label: 'Legal business name',
          readonly: true,
        },
      },
      {
        key: 'dba',
        type: 'input',
        props: {
          label: 'Doing business as (DBA)',
        },
      },
      {
        fieldGroupClassName: 'row',
        fieldGroup: [
          {
            key: 'businessPhone',
            type: 'input',
            className: 'col-md-8',
            props: {
              label: 'Business phone number',
              required: true,
            },
          },
          {
            key: 'businessPhoneExt',
            type: 'input',
            className: 'col-md-4',
            props: {
              label: 'Ext',
            },
          },
        ],
      },
      {
        key: 'businessEmail',
        type: 'input',
        props: {
          label: 'Business email',
          type: 'email',
        },
      },
      {
        key: 'purchaseOrder',
        type: 'input',
        props: {
          label: 'Purchase order',
        },
      },
    ];
  }

  private getContactFields(): FormlyFieldConfig[] {
    return [
      {
        fieldGroupClassName: 'row',
        fieldGroup: [
          {
            key: 'firstName',
            type: 'input',
            className: 'col-md-6',
            props: {
              label: 'First name',
              required: true,
            },
          },
          {
            key: 'lastName',
            type: 'input',
            className: 'col-md-6',
            props: {
              label: 'Last name',
              required: true,
            },
          },
        ],
      },
      {
        key: 'primaryPhone',
        type: 'radio',
        props: {
          label: 'Primary phone',
          required: true,
          options: [
            { value: 'mobile', label: 'Mobile' },
            { value: 'business', label: 'Business' },
            { value: 'home', label: 'Home' },
          ],
        },
      },
      {
        fieldGroupClassName: 'row',
        fieldGroup: [
          {
            key: 'mobile',
            type: 'input',
            className: 'col-md-4',
            props: { label: 'Mobile' },
          },
          {
            key: 'businessContactPhone',
            type: 'input',
            className: 'col-md-4',
            props: { label: 'Business' },
          },
          {
            key: 'contactExt',
            type: 'input',
            className: 'col-md-4',
            props: { label: 'Ext' },
          },
        ],
      },
      {
        key: 'homePhone',
        type: 'input',
        props: { label: 'Home' },
      },
      {
        key: 'contactEmail',
        type: 'input',
        props: {
          label: 'Email',
          type: 'email',
          readonly: true,
        },
      },
    ];
  }

  private getReviewFields(): FormlyFieldConfig[] {
    return [
      {
        key: 'confirmAddresses',
        type: 'checkbox',
        props: {
          label: 'Yes, I confirm the addresses below are current',
          required: true,
        },
      },
    ];
  }

  private getPersonnelFields(): FormlyFieldConfig[] {
    return [
      {
        key: 'type',
        type: 'radio',
        props: {
          label: 'Personnel type',
          required: true,
          options: [
            { value: 'management', label: 'Management' },
            { value: 'maintenance', label: 'Maintenance' },
            { value: 'operations', label: 'Operations' },
          ],
        },
      },
      {
        key: 'firstName',
        type: 'input',
        props: { label: 'First Name', required: true },
      },
      {
        key: 'lastName',
        type: 'input',
        props: { label: 'Last Name', required: true },
      },
      {
        key: 'primaryPhone',
        type: 'radio',
        props: {
          label: 'Primary Phone',
          required: true,
          options: [
            { value: 'mobile', label: 'Mobile' },
            { value: 'business', label: 'Business' },
            { value: 'home', label: 'Home' },
          ],
        },
      },
      { key: 'mobile', type: 'input', props: { label: 'Mobile' } },
      { key: 'business', type: 'input', props: { label: 'Business' } },
      { key: 'ext', type: 'input', props: { label: 'Ext' } },
      { key: 'home', type: 'input', props: { label: 'Home' } },
      { key: 'email', type: 'input', props: { label: 'Email', type: 'email' } },
    ];
  }

  private getScopeFields(): FormlyFieldConfig[] {
    return [
      {
        key: 'workType',
        type: 'radio',
        props: {
          label: 'Work type',
          required: true,
          options: [
            { value: 'maintain', label: 'Maintain' },
            { value: 'operate', label: 'Operate' },
            { value: 'install', label: 'Install' },
            { value: 'alter', label: 'Alter' },
          ],
        },
      },
      {
        key: 'deviceTypes',
        type: 'multicheckbox',
        props: {
          label: 'Device type',
          required: true,
          options: [
            { value: 'industrial-arm', label: 'Industrial Robotic Arm' },
            { value: 'collaborative', label: 'Collaborative Robot (Cobot)' },
            { value: 'mobile-platform', label: 'Mobile Robot Platform' },
            { value: 'delivery-drone', label: 'Delivery Drone' },
            { value: 'surgical', label: 'Surgical Robot' },
            { value: 'warehouse', label: 'Warehouse Automation' },
            { value: 'home-service', label: 'Home Service Robot' },
            { value: 'inspection', label: 'Inspection Robot' },
          ],
        },
      },
    ];
  }

  private emptyPersonnel(): PersonnelEntry {
    return {
      type: '',
      firstName: '',
      lastName: '',
      primaryPhone: 'mobile',
      mobile: '',
      business: '',
      ext: '',
      home: '',
      email: '',
    };
  }
}
