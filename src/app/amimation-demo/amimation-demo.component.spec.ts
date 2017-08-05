import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AmimationDemoComponent } from './amimation-demo.component';

describe('AmimationDemoComponent', () => {
  let component: AmimationDemoComponent;
  let fixture: ComponentFixture<AmimationDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmimationDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmimationDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
