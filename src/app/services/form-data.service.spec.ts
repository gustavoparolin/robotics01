import { TestBed } from '@angular/core/testing';
import { FormDataService } from './form-data.service';

describe('FormDataService', () => {
  let service: FormDataService;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return default data', () => {
    const data = service.getData();
    expect(data.technology).toBe('');
    expect(data.currentStep).toBe(0);
    expect(data.legalBusinessName).toBe('Demo Corp Ltd.');
  });

  it('should update data', () => {
    service.updateData({ technology: 'robotics' });
    expect(service.getData().technology).toBe('robotics');
  });

  it('should persist to localStorage', () => {
    service.updateData({ technology: 'robotics' });
    const stored = JSON.parse(localStorage.getItem('robotics_licence_application') || '{}');
    expect(stored.technology).toBe('robotics');
  });

  it('should add and remove personnel', () => {
    service.addPersonnel({
      type: 'maintenance',
      firstName: 'John',
      lastName: 'Doe',
      primaryPhone: 'mobile',
      mobile: '2361234567',
      business: '',
      ext: '',
      home: '',
      email: 'john@test.com',
    });
    expect(service.getData().personnel.length).toBe(1);
    service.removePersonnel(0);
    expect(service.getData().personnel.length).toBe(0);
  });

  it('should add and remove scope of work', () => {
    service.addScopeOfWork({ workType: 'install', deviceTypes: ['delivery-drone'] });
    expect(service.getData().scopeOfWork.length).toBe(1);
    service.removeScopeOfWork(0);
    expect(service.getData().scopeOfWork.length).toBe(0);
  });

  it('should reset data', () => {
    service.updateData({ technology: 'robotics' });
    service.reset();
    expect(service.getData().technology).toBe('');
  });

  it('should set step', () => {
    service.setStep(3);
    expect(service.getData().currentStep).toBe(3);
  });
});
