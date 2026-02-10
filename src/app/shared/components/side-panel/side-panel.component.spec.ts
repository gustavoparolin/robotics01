import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SidePanelComponent } from './side-panel.component';

describe('SidePanelComponent', () => {
  let component: SidePanelComponent;
  let fixture: ComponentFixture<SidePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidePanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SidePanelComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should not render when closed', () => {
    component.isOpen = false;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.side-panel')).toBeNull();
  });

  it('should render when open', () => {
    component.isOpen = true;
    component.title = 'Test Panel';
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.side-panel')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('.panel-title').textContent).toContain('Test Panel');
  });

  it('should emit close on overlay click', () => {
    component.isOpen = true;
    fixture.detectChanges();
    spyOn(component.panelClose, 'emit');
    fixture.nativeElement.querySelector('.panel-overlay').click();
    expect(component.panelClose.emit).toHaveBeenCalled();
  });
});
