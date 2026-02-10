import { Injectable } from '@angular/core';

export interface PersonnelEntry {
  type: string;
  firstName: string;
  lastName: string;
  primaryPhone: string;
  mobile: string;
  business: string;
  ext: string;
  home: string;
  email: string;
}

export interface ScopeOfWorkEntry {
  workType: string;
  deviceTypes: string[];
}

export interface AddressData {
  attention: string;
  address: string;
  unit: string;
  country: string;
  province: string;
  city: string;
  postalCode: string;
}

export interface ApplicationFormData {
  // Step 1: Technology
  technology: string;
  licenceClass: string;

  // Step 2: Business
  legalBusinessName: string;
  dba: string;
  businessPhone: string;
  businessPhoneExt: string;
  businessEmail: string;
  purchaseOrder: string;
  mailingAddress: AddressData;
  billingAddress: AddressData;

  // Step 3: Contact
  firstName: string;
  lastName: string;
  primaryPhone: string;
  mobile: string;
  businessContactPhone: string;
  contactExt: string;
  homePhone: string;
  contactEmail: string;

  // Step 4: Requirements
  personnel: PersonnelEntry[];
  scopeOfWork: ScopeOfWorkEntry[];

  // Step 5: Review
  confirmAddresses: boolean;

  // Metadata
  currentStep: number;
  lastSaved: string;
}

const STORAGE_KEY = 'robotics_licence_application';

const DEFAULT_ADDRESS: AddressData = {
  attention: '',
  address: '',
  unit: '',
  country: '',
  province: '',
  city: '',
  postalCode: '',
};

@Injectable({ providedIn: 'root' })
export class FormDataService {
  private data: ApplicationFormData;

  constructor() {
    this.data = this.load();
  }

  getData(): ApplicationFormData {
    return this.data;
  }

  updateData(partial: Partial<ApplicationFormData>): void {
    this.data = {
      ...this.data,
      ...partial,
      lastSaved: new Date().toISOString(),
    };
    this.save();
  }

  setStep(step: number): void {
    this.data.currentStep = step;
    this.save();
  }

  addPersonnel(entry: PersonnelEntry): void {
    this.data.personnel = [...this.data.personnel, entry];
    this.save();
  }

  removePersonnel(index: number): void {
    this.data.personnel = this.data.personnel.filter((_, i) => i !== index);
    this.save();
  }

  addScopeOfWork(entry: ScopeOfWorkEntry): void {
    this.data.scopeOfWork = [...this.data.scopeOfWork, entry];
    this.save();
  }

  removeScopeOfWork(index: number): void {
    this.data.scopeOfWork = this.data.scopeOfWork.filter((_, i) => i !== index);
    this.save();
  }

  reset(): void {
    this.data = this.getDefaultData();
    localStorage.removeItem(STORAGE_KEY);
  }

  private save(): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
    } catch {
      console.warn('Could not save form data to localStorage');
    }
  }

  private load(): ApplicationFormData {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return { ...this.getDefaultData(), ...JSON.parse(stored) };
      }
    } catch {
      console.warn('Could not load form data from localStorage');
    }
    return this.getDefaultData();
  }

  private getDefaultData(): ApplicationFormData {
    return {
      technology: '',
      licenceClass: '',
      legalBusinessName: 'Demo Corp Ltd.',
      dba: '',
      businessPhone: '',
      businessPhoneExt: '',
      businessEmail: '',
      purchaseOrder: '',
      mailingAddress: { ...DEFAULT_ADDRESS },
      billingAddress: { ...DEFAULT_ADDRESS },
      firstName: '',
      lastName: '',
      primaryPhone: 'mobile',
      mobile: '',
      businessContactPhone: '',
      contactExt: '',
      homePhone: '',
      contactEmail: '',
      personnel: [],
      scopeOfWork: [],
      confirmAddresses: false,
      currentStep: 0,
      lastSaved: '',
    };
  }
}
